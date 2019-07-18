//获取应用实例
const app = getApp()

Page({
  data: {
    phoneNum: '',
    pwd: ''
  },
  inputPhoneNum(e) {
    var val = e.detail.value;
    this.setData({ phoneNum: val });
  },
  inputPwd(e) {
    var val = e.detail.value;
    this.setData({ pwd: val });
  },
  toForgetPwd(){
    wx.navigateTo({
      url: '/pages/login/forgot-password/forgot-password',
    })
  },
  toReg(){
    wx.navigateTo({
      url: '/pages/login/register/register',
    })
  }
})