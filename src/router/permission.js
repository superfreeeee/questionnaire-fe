import router from './index'
import store from './store'

router.beforeEach(async(to, from, next) => {
  if(to.path.startsWith('/editor')) {
    if(store.state.user.loginState) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})