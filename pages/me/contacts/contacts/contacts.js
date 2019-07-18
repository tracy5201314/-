//获取应用实例
const app = getApp()

Page({
  data: {},
  toAddContacts(){
    wx.navigateTo({
      url: '/pages/me/contacts/add-contacts/add-contacts',
    })
  }
})