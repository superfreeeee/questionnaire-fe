import router from './index'
import store from '../store'

router.beforeEach((to, from, next) => {
  // console.log('before each, router guard')
  // console.log(`to path: ${to.path}`)
  if(!store.state.user.loginState) {
    if(to.path === '/login' || to.path.startsWith('/customer')) {
      // console.log('in white list')
      next()
    } else {
      // console.log('not login and redirect')
      next('/login')
    }
  } else {
    // console.log('is login')
    next()
  }
})