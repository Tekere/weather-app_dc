import { createStore } from 'vuex'

export default createStore({
  state: {
    isOpenSidebar: false,
  },
  getters: {
    isOpenSidebar: (state) => state.isOpenSidebar,
  },
  mutations: {
    toggleIsOpenSidebar(state) {
      state.isOpenSidebar = !state.isOpenSidebar
    },
  },
  actions: {
    toggleIsOpenSidebar({ commit }) {
      commit('toggleIsOpenSidebar')
    },
  },
  modules: {},
})
