import {

} from '@/api'

const user = {
  state: {
    loginState: false,
    userInfo: {}  /* UserInfo */
  },
  mutations: {
    set_loginState(state, bool) {
      state.loginState = bool
    },
    set_userInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    login: async({ commit }, loginParam/* UserParam */) => {
      commit
      loginParam
    },
    register: async({ commit }, registerParam/* UserParam */) => {
      commit
      registerParam
    },
    logout: async({ commit }, registerParam/* UserParam */) => {
      commit
      registerParam
    },
  }
}

export default user