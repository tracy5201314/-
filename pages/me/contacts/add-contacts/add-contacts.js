//获取应用实例
const app = getApp()

Page({
  data: {
    region: ['重庆市', '重庆市', '九龙坡区'],
    customItem: '全部',
    showModal: true
  },
  bindRegionChange (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  switch1Change (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  preventTouchMove (e){},
  modalCandel() {
    this.setData({ showModal: false })
  },
  modalConfirm (e){
    this.setData({ showModal: false })
  }
})