// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    sidebar: false, // حالة الشريط الجانبي
  },
  mutations: {
    TOGGLE_SIDEBAR(state) {
      state.sidebar = !state.sidebar; // قم بتبديل حالة الشريط الجانبي
    },
  },
  actions: {
    toggleSidebar({ commit }) {
      commit('TOGGLE_SIDEBAR'); // قم باستدعاء العملية التي تم تعريفها في mutations
    },
  },
  getters: {
    isSidebarOpen: (state) => state.sidebar, // مثال على getter للتحقق من حالة الشريط الجانبي
  },
});
