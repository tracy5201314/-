//获取应用实例
const app = getApp()

Page({
  data: {
    phoneNum: '',
    verifyBtn: '',
    pwd: ''
  },
  inputPhoneNum(e) {
    var val = e.detail.value;
    this.setData({ phoneNum: val });
  },
  inputVerifybtn(e) {
    var val = e.detail.value;
    this.setData({ verifyBtn: val });
  },
  inputPwd(e) {
    var val = e.detail.value;
    this.setData({ pwd: val });
  },
  toLogin(){
    wx.navigateTo({
      url: '/pages/login/login/login',
    })
  }
})