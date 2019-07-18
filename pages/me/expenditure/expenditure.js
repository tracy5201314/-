//获取应用实例
const app = getApp()

Page({
  data: {
    year: '2019',
    monthIndex: 6,
    monthArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    userIndex: 0,
    userArr: ['张小三', '李小四', '王小五'],
  },
  bindYearChange(e){
    this.setData({ year: e.detail.value })
  },
  bindMonthChange(e){
    this.setData({ monthIndex: e.detail.value })
  },
  bindUserChange(e){
    this.setData({ userIndex: e.detail.value})
  }
})