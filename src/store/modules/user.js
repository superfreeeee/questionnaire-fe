import {

} from '@/api'

const user = {
  state: {
    loginState: false,
    userInfo: {}  /* UserInfo */
  },
  mutation: {
    set_loginState(state, bool) {
      state.loginState = bool
    },
    set_userInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    login: async({ commit }, loginParam/* UserParam */) => {

    },
    register: async({ commit }, registerParam/* UserParam */) => {

    },
    logout: async({ commit }, registerParam/* UserParam */) => {

    },
  }
}

export default user