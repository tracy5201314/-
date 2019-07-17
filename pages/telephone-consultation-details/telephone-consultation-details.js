// pages/telephone-consultation-details/telephone-consultation-details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    patientPopupFlag: true,
    array: ['李小璐  女  26岁', '张三  女  26岁', '李四  女  26岁', '王武  女  26岁'],
    index: 0,
    addFlag: true,
    value: [0],
    callRecordsData:[
      { "accurateTime": "2018.03.22  12:02:11","duration":1},
      { "accurateTime": "2018.03.25  14:02:11", "duration": 5 },
      { "accurateTime": "2018.04.22  16:02:20", "duration": 10 },
      { "accurateTime": "2018.08.22  08:02:11", "duration": 12 },
      { "accurateTime": "2018.09.15  15:08:11", "duration": 13 },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.callRecordsData)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 就诊人选择弹窗
   *  closeAddPatient 关闭弹窗
   *  bindChange 弹窗中的滚动绑定事件
   *  openAddPatient 打开弹窗
   *  sureAddPatient 弹窗确认按钮事件
  */
  closeAddPatient: function (e) {
    this.setData({
      index: this.data.index,
      addFlag: !this.data.addFlag
    })
  },
  bindChange: function (e) {
    const val = e.detail.value[0];
    wx.setStorage({
      key: 'current',
      data: val,
    })
  },
  openAddPatient: function () {
    this.setData({
      addFlag: !this.data.addFlag
    })
  },
  sureAddPatient: function () {
    var _this = this;
    wx.getStorage({
      key: 'current',
      success: function (res) {
        _this.setData({
          index: res.data,
          addFlag: !_this.data.addFlag
        })
      },
    })
  }
})