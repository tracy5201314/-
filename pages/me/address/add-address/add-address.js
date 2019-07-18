//获取应用实例
const app = getApp()

Page({
  data: {
    "userName": "",
    "phoneNum": "",
    "area": '',
    "detail": ""
  },
  inputUserName(e){
    var val = e.detail.value;
    this.setData({ userName: val });
  },
  inputPhoneNum(e){
    var val = e.detail.value;
    this.setData({ phoneNum: val });
  },
  inputArea(e){
    var val = e.detail.value;
    this.setData({ area: val });
  },
  inputDetail(e){
    var val = e.detail.value;
    this.setData({ detail: val });
  }
})