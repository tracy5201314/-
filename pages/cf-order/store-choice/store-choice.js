//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showBool: true
  },
  toggleDialog() {
    this.setData({ showBool: !this.data.showBool });
  },
  handelRefuse(){
    this.setData({ showBool: false });
  },
  handelOk() {
    this.setData({ showBool: false });
  }
})
