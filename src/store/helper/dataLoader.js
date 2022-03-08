// import axios from 'axios'
// import { data } from 'jquery';

// export default (endpoint) => ({
//     state() {
//         return {
//             items: [],
//             state: undefined,
//         }
//     },
//     mutations: {
//         setAll(store, items) {
//             store.items = items;
//         },
//         // update(store, updatedFields) {
//         //     const index = store.items.findIndex((v) => v.id === updatedFields.id);
//         //     store.items[index] = { ...store.items[index], ...updatedFields };
//         // },
//         delete(store, { id }) {
//             const index = store.items.findIndex((v) => v.ID === id);
//         },
//         add(store, item) {
//             if (item !== null) {
//                 store.items.unshift(item);
//             }
//         },
//         push(store, item) {
//             if (item !== null) {
//                 store.items.push(item);
//             }
//         },
//         startLoading(store) {
//             store.state = 'LOADING';
//         },
//         stopLoading(store) {
//             store.state = 'DONE';
//         },
//     },
//     actions: {
//         loadData: async ({ commit, dispatch, state }, forceRefresh = false) => {
//             const task = await dispatch('tasks/add', { title: 'Initialization' }, { root: true });
//             if (!state.state || forceRefresh) {
//                 await commit('startLoading', { title: 'Initialization' });
//                 const dataResponse = (await axios.get(endpoint));
//                 await commit('setAll', dataResponse.data);
//                 await commit('stopLoading', { title: 'Initialization' });
//             }
//             else {
//                 const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//                 while (state.state === 'LOADING') {
//                     await wait(100);
//                 }
//             }
//             dispatch('tasks/remove', task, { root: true });
//         },
//         add: async ({ commit, dispatch }, item) => {
//             const task = await dispatch('tasks/add', { title: 'Initialization' }, { root: true });
//             let newItem;
//             try {
//                 newItem = (await axios.post(endpoint,item)).data;
//                 await commit ('add', newItem);
//                 dispatch('tasks/remove', task, {root:true});
//                 //toast

//             } catch(error) {
//                 dispatch('tasks/remove', task, { root: true});
//                 if (error.response?.status===400) {
//                     //toast
//                     console.log("error 400")
//                 } else if (error.response?.status === 500) {
//                     //toast
//                     console.log("error 500")
//                 }
//             }
//         }
//     },
//     getters: {
//         all: (state) => state.items,
//         byId: (state) => ({id}) => state.items.find((v) => v.id === id),
//     }
// })