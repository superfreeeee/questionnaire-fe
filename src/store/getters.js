const getters = {
  // 用户相关
  isLogin: state => state.user.userId > 0,
  userId: state => state.user.userId,
  userName: state => state.user.userName,
  // 问卷相关
  createPaperVisible: state => state.paper.createPaperVisible
}

export default getters