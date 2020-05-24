const getters = {
  // Customer 相关 填写用户
  customerPaper: state => state.customer.paper,
  // User (Login / Register) 相关
  loginState: state => state.user.loginState,
  userInfo: state => state.user.userInfo,
  // Create 相关
  createPaperVisible: state => state.paper.createPaperVisible,
  currentPaper: state => state.paper.currentPaper,
  // Monitor 相关
  monitorPaper: state => state.customer.paperStatistic,
  //Overview 相关
  allPapers: state => state.paper.paperList
}

export default getters