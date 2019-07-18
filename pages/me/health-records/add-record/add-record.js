//获取应用实例
const app = getApp()

Page({
  data: {
    jzDate: '2019-07-09',
    hosIndex: 0,
    hosArr: ['重庆市妇幼保健院', '重庆医科大学附属儿童医院', '陆军军医大学大坪医院'],
    keshiIndex: 0,
    keshiArr: ['内科', '外科', '儿科']
  },
  bindJzDateChange(e){
    this.setData({
      jzDate: e.detail.value
    })
  },
  bindHosChange(e){
    this.setData({
      hosIndex: e.detail.value
    })
  },
  bindKeshiChange(e){
    this.setData({
      keshiIndex: e.detail.value
    })
  }
})