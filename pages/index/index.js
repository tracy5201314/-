//index.js
//获取应用实例
const app = getApp()

Page({
  data: {},
  onLoad: function (options) {},
  toBaodao(){
    wx.navigateTo({
      url: '/pages/further-consultation/further-consultation',
    })
  }
})
