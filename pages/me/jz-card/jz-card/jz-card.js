//获取应用实例
const app = getApp()

Page({
  data: {
    jzcNum: 1,
    zjrArr: ['本人', '张三', '李四', '王五'],
    jzrIndex: 0
  },
  bindJzrChange(e){
    this.setData({
      jzrIndex: e.detail.value
    })
  },
  toAddJzcard(){
    wx.navigateTo({
      url: '/pages/me/jz-card/add-jzcard/add-jzcard',
    })
  }
})