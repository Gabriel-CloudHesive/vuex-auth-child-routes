import Vue from "vue";
import Vuex from "vuex";
import authentication from "@/modules/authentication";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
  },
  getters: {},
  mutations: {
    setLoading(state, bool) {
      state.loading = bool;
    },
  },
  actions: {},
  modules: {
    authentication,
  },
});
