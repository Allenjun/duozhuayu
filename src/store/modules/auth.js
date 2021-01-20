const auth = {
  namespaced: true,
  state: {
    isLogin: true
  },
  actions: {
    login({ state }, login) {
      state.isLogin = login;
    }
  }
};
export default auth;
