//获取应用实例
const app = getApp()

Page({
  data: {},
  addAddress(){
    wx.navigateTo({
      url: '/pages/me/address/add-address/add-address',
    })
  }
})