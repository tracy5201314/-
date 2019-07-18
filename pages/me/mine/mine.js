//获取应用实例
const app = getApp()

Page({
  data: {},
  toContacts(){
    wx.navigateTo({
      url: '/pages/me/contacts/contacts/contacts',
    })
  },
  toAddr(){
    wx.navigateTo({
      url: '/pages/me/address/address-manage/address-manage',
    })
  },
  toJkCard(){
    wx.navigateTo({
      url: '/pages/me/jz-card/jz-card/jz-card',
    })
  },
  logout(){
    wx.navigateTo({
      url: '/pages/login/login/login',
    })
  },
  toAddRecord(){
    wx.navigateTo({
      url: '/pages/me/health-records/add-record/add-record',
    })
  },
  toRecordDetail(){
    wx.navigateTo({
      url: '/pages/me/health-records/health-records/health-records',
    })
  },
  toAddContacts(){
    wx.navigateTo({
      url: '/pages/me/contacts/add-contacts/add-contacts',
    })
  }
})