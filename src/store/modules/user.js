import {
  loginAPI,
  registerAPI
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
      const res = await loginAPI(loginParam)
      const userInfo = res.content
      if(userInfo) {
        this.$notify.success({
          title: '登入成功'
        })
        commit('set_userInfo', userInfo)
        commit('set_loginState', true)
      } else {
        this.$notify.error({
          title: '登入失败'
        })
      }
    },
    register: async(_, registerParam/* UserParam */) => {
      const res = await registerAPI(registerParam)
      if(res) {
        this.$notify.success({
          title: '注册成功'
        })
      } else {
        this.$notify.error({
          title: '注册失败'
        })
      }
    }
  }
}

export default user