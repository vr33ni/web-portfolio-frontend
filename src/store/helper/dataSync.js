import axios from "axios";

export default (endpoint) => ({
  state() {
    return {
      items: [],
      itemDetailsById: {},
      state: undefined,
    };
  },

  mutations: {
    setAll(store, items) {
      store.items = items;
    },

    setDetails(store, item) {
      store.itemDetailsById[item.id] = item;
    },

    delete(store, { id }) {
      const index = store.items.findIndex((v) => v.ID === id);

      store.items.splice(index, 1);
    },

    update(store, updatedFields) {
      const index = store.items.findIndex((v) => v.id === updatedFields.id);

      store.items[index] = { ...store.items[index], ...updatedFields };

      store.itemDetailsById[updatedFields.id] = { ...updatedFields };
    },

    add(store, item) {
      if (item != null) {
        store.items.unshift(item);
      }
    },

    push(store, item) {
      if (item != null) {
        store.items.push(item);
      }
    },

    startLoading(store) {
      store.state = "LOADING";
    },

    stopLoading(store) {
      store.state = "FINISHED";
    },
  },

  actions: {
    loadData: async ({ commit, dispatch, state }, forceRefresh = false) => {
      const task = await dispatch(
        "tasks/show",
        { title: "Initialization" },
        { root: true }
      );

      if (!state.state || forceRefresh) {
        await commit("startLoading", { title: "Initialization" });
        // first run
        const dataResponse = await axios.get(endpoint);
        //console.log(dataResponse);

        await commit("setAll", dataResponse.data);
        await commit("stopLoading", { title: "Initialization" });
      } else {
        // each next run wait for the loading callback
        const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        while (state.state === "LOADING") {
          // eslint-disable-next-line no-await-in-loop
          await wait(100);
        }
      }
      dispatch("tasks/done", task, { root: true });
    },

    loadItem: async ({ commit, dispatch, state }, { id, forceRefresh }) => {
      const task = await dispatch(
        "tasks/show",
        { title: "Initialization" },
        { root: true }
      );

      if (!state.itemDetailsById[id] || forceRefresh) {
        state.itemDetailsById[id] = {}; // empty object to signal "loading ..."

        const dataResponse = await axios.get(`${endpoint}/${id}`);

        await commit("setDetails", dataResponse.data);
      } else {
        // each next run wait for the loading callback
        const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        while (!state.itemDetailsById[id].id) {
          // eslint-disable-next-line no-await-in-loop
          await wait(100);
        }
      }
      dispatch("tasks/done", task, { root: true });
      return state.itemDetailsById[id];
    },

    add: async ({ commit, dispatch }, item) => {
      const task = await dispatch(
        "tasks/show",
        { title: "Initialization" },
        { root: true }
      );
      let newItem;

      try {
        newItem = (await axios.post(endpoint, item)).data;
        await commit("add", newItem);
        dispatch("tasks/done", task, { root: true });
        dispatch(
          "toasts/add",
          {
            title: "Add entry",
            text: "Successfully added to the list",
            cssClass: "success",
          },
          { root: true }
        );
      } catch (error) {
        dispatch("tasks/done", task, { root: true });

        if (error.response?.status === 400) {
          dispatch(
            "toasts/add",
            {
              title: `Could not add ${
                item.value !== "" ? item.customer : "empty string"
              }`,
              text: `Error response: ${error.response?.data.message}. Please try again!`,
              cssClass: "warning",
            },
            { root: true }
          );
        } else if (error.response?.status === 500) {
          dispatch(
            "toasts/add",
            {
              title: `Could not add ${
                item.value !== "" ? item.customer : "empty string"
              }`,
              text: `Error response: ${error.response?.data.message}. Please try again!`,
              cssClass: "warning",
            },
            { root: true }
          );
        }
      }
    },

    addClassification: async ({ commit, dispatch }, item) => {
      const task = await dispatch(
        "tasks/show",
        { title: "Initialization" },
        { root: true }
      );
      let newItem;
      try {
        newItem = (await axios.post(endpoint, item)).data;
        await commit("push", newItem);
        dispatch("tasks/done", task, { root: true });
        dispatch(
          "toasts/add",
          {
            title: "Add classification",
            text: "Successfully added to the list",
            cssClass: "success",
          },
          { root: true }
        );
      } catch (error) {
        dispatch("tasks/done", task, { root: true });

        if (error.response?.status === 400) {
          dispatch(
            "toasts/add",
            {
              title: `Could not add ${
                item.value !== "" ? item.classification : "empty string"
              }`,
              text: `Error response: ${error.response?.data.message}. Please try again!`,
              cssClass: "warning",
            },
            { root: true }
          );
        } else if (error.response?.status === 500) {
          dispatch(
            "toasts/add",
            {
              title: `Could not add ${
                item.value !== "" ? item.classification : "empty string"
              }`,
              text: `Error response: ${error.response?.data.message}. Please try again!`,
              cssClass: "warning",
            },
            { root: true }
          );
        }
      }
    },

    addByEmail: async ({ commit, dispatch }, item) => {
      const task = await dispatch(
        "tasks/show",
        { title: "Initialization" },
        { root: true }
      );

      let newItem;

      try {
        newItem = await axios.post(`${endpoint}`, { email: item.value });

        await commit("add", newItem.data);

        dispatch("tasks/done", task, { root: true });

        dispatch(
          "toasts/add",
          {
            title: `Added ${item}`,
            text: `${item.value} added successfully to the list of ${endpoint}`,
            cssClass: "success",
          },
          { root: true }
        );
      } catch (error) {
        dispatch("tasks/done", task, { root: true });

        if (error.response?.status === 400) {
          dispatch(
            "toasts/add",
            {
              title: `Could not add ${
                item.value !== "" ? item.value : "empty string"
              }`,
              text: `Error response: ${error.response?.data.message}. Please try again!`,
              cssClass: "warning",
            },
            { root: true }
          );
        }
      }
    },

    update: async ({ commit, dispatch }, item) => {
      const task = await dispatch(
        "tasks/show",
        { title: "Saving" },
        { root: true }
      );

      let saveResponse;

      try {
        saveResponse = await axios.put(`${endpoint}/${item.id}`, item); // ID in capital letters, cause used in capital letters in current golang backend

        await commit("update", saveResponse.data);

        dispatch("tasks/done", task, { root: true });

        dispatch(
          "toasts/add",
          {
            title: "save successful",
            text: `Your update of the list of ${endpoint} was successful.`,
            cssClass: "success",
          },
          { root: true }
        );
      } catch (error) {
        dispatch("tasks/done", task, { root: true });
      }

      return saveResponse.data;
    },

    updateByCustomerID: async ({ commit, dispatch }, item) => {
      const task = await dispatch(
        "tasks/show",
        { title: "Saving" },
        { root: true }
      );

      let saveResponse;

      try {
        saveResponse = await axios.put(`${endpoint}/${item.customerID}`, item); // ID in capital letters, cause used in capital letters in current golang backend

        await commit("updateByCustomerID", saveResponse.data);

        dispatch("tasks/done", task, { root: true });

        dispatch(
          "toasts/add",
          {
            title: "Update successful",
            text: "Your update of the list of restricted customers was successful.",
            cssClass: "success",
          },
          { root: true }
        );
      } catch (error) {
        dispatch("tasks/done", task, { root: true });
      }

      return saveResponse.data;
    },

    delete: async ({ commit, dispatch }, id) => {
      const task = await dispatch(
        "tasks/show",
        { title: "Saving" },
        { root: true }
      );

      try {
        await axios.delete(`${endpoint}/${id}`);

        await commit("delete", { id });

        dispatch("tasks/done", task, { root: true });

        dispatch(
          "toasts/add",
          {
            title: "Delete entry",
            text: "Your entry was removed successfully from the list.",
            cssClass: "success",
          },
          { root: true }
        );
      } catch (error) {
        dispatch("tasks/done", task, { root: true });

        if (error.response?.status === 409) {
          dispatch(
            "toasts/add",
            {
              title: `Cannot delete ${id}`,
              text: "Please try again!",
              cssClass: "warning",
            },
            { root: true }
          );
        }
      }
    },
  },

  getters: {
    all: (state) => state.items,
    byId:
      (state) =>
      ({ id }) =>
        state.items.find((v) => v.id === id),
  },
});
