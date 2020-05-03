const getters = {
  // 用户相关
  loginState: state => state.user.loginState,
  userInfo: state => state.user.userInfo,
  // 问卷相关
  createPaperVisible: state => state.paper.createPaperVisible
}

export default getters