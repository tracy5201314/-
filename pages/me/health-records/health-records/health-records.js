//获取应用实例
const app = getApp()

Page({
  data: {
    currentId: 1,
    HRecord: 4
  },
  handleNav(e){
    this.setData({ currentId: e.currentTarget.id });
  },
  toMRecordDetil(){
    wx.navigateTo({
      url: '/pages/me/health-records/medical-record-detail/medical-record-detail',
    })
  },
  toAddRecord(){
    wx.navigateTo({
      url: '/pages/me/health-records/add-record/add-record',
    })
  },
  toEditJkInfo(){
    wx.navigateTo({
      url: '/pages/me/health-records/edit-jkinfo/edit-jkinfo',
    })
  }
})