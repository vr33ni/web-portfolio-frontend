
import { shallowMount } from "@vue/test-utils";
import { createStore } from "vuex"
import { key } from '../../store/index'
import Home from "./Home.vue"




test("has text", () => {
    const store = createStore({
        modules: {
            programming: {
              namespaced: true,
              state: {
                items: []
              },
            },
        }
    })

    expect(store.state.programming.items).toBe([])
  });
