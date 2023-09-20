import Vue from "vue";
import Vuex from "vuex";
import authentication from "@/modules/authentication";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['authentication']
})
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
  plugins: [vuexLocal.plugin]
});
