//获取应用实例
const app = getApp()

Page({
  data: {
    zjrArr: ['本人', '张三', '李四', '王五'],
    jzrIndex: 0,
    hosArr: ['重庆市妇幼保健院', '重庆医科大学附属儿童医院', '陆军军医大学大坪医院'],
    hosIndex: 0,
    typeArr: ['医保卡', '就诊卡', '医院ID'],
    typeIndex: 0
  },
  bindJzrChange(e){
    this.setData({
      jzrIndex: e.detail.value
    })
  },
  bindHosChange(e){
    this.setData({
      hosIndex: e.detail.value
    })
  },
  bindTypeChange(e){
    this.setData({
      typeIndex: e.detail.value
    })
  }
})