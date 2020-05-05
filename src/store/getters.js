const getters = {
  // 填写用户
  customerPaper: state => state.customer.paper,
  // 用户相关
  loginState: state => state.user.loginState,
  userInfo: state => state.user.userInfo,
  // 问卷相关
  createPaperVisible: state => state.paper.createPaperVisible
}

export default getters