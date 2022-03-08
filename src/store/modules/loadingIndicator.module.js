export default {
  namespaced: true,
  state() {
    return {
      tasks: [],
      nextId: 0,
    };
  },
  mutations: {
    remove(state, { id }) {
      const index = state.tasks.findIndex((v) => v.id === id);
      if (index > -1) {
        state.tasks.splice(index, 1);
      }
    },
    add(state, task) {
      state.tasks.unshift(task);
    },
    increaseNextId(state) {
      state.nextId += 1;
    },
  },
  actions: {
    remove: ({ commit }, { id }) => {
      commit("remove", { id });
    },
    add: ({ commit, state }, { title = "" }) => {
      const task = {
        id: state.nextId,
        title,
      };
      commit("increaseNextId");
      commit("add", task);
      return task;
    },
  },
  getters: {
    all: (state) => state.tasks,
  },
};
