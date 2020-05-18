import {
  loginAPI,
  registerAPI
} from '../../api/user/user'

const user = {
  state: {
    loginState: false,
    userInfo: {
      id: '666',
      name: 'superfree',
      password: '123456789'
    } /* UserInfo */
  },
  mutations: {
    set_loginState(state) {
      state.loginState = true
    },
    set_userInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    login: async ({ commit }, loginParam /* UserParam */) => {
      const userInfo = {
        name: loginParam.username1,
        password: loginParam.password
      }
      // const res = await loginAPI(loginParam)
      const res = {
        data: {
          success: true
        }
      }
      if (res.data.success) {
        commit('set_userInfo', userInfo)
        commit('set_loginState', true)
        return true
      } else {
        return false
      }
    },
    register: async (_, registerParam /* UserParam */) => {
      const registerForm = {
        name: registerParam.newUser,
        password: registerParam.newPW
      }
      // const res = await registerAPI(registerForm)
      const res = {
        data: {
          success: true
        }
      }
      return res.data.success
    },
    logout: ({ commit }) => {
      commit('set_userInfo', {})
      commit('set_loginState', false)
    }
  }
}

export default user
