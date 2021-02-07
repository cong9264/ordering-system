const state = {
  user: {
    name: 'admin',
    pwd: 'admin'
  },
  token: false
};

const mutations = {
  // SET_TOKEN: (state, token) => {
  //   state.token = token;
  // }
};

const actions = {
  login (state, userInfo) {
    return new Promise((resolve, reject) => {
      const { name, pwd } = state.state.user
      if (name === userInfo.name.trim() && pwd === userInfo.pwd) {
        state.state.token = true;
        resolve();
      } else {
        reject();
      }
    });
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
}