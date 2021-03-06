// pages/graphic-consultation/telephone-consultation.js
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
    timeNum:1,
    toView: 'red',
    scrollTop: 100
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  formSubmit: function (e) {
    console.log(this.data.imgPath)
  },
  /**
   * 显示提示弹窗
  */
  tipsPopup: function () {
    wx.showModal({
      title: '说明',
      content: '定向用户折扣实则为医生向其患者发放的福利，成为医生的患者可享受购买特殊折扣。请通过诊后报到等方式成为医生的患者。',
      showCancel: false,
      confirmText: "知道了",
      confirmColor: "#1e7df7",
      success(res) {
        console.log(res);
      }
    })
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
  },
  /**
   * 分钟数增减
  */
  addNum:function(){
    let num = ++this.data.timeNum;
    this.setData({
      timeNum:num
    })
  },
  reductionNum:function(){
    let num = --this.data.timeNum;
    if(num <= 1){
      this.setData({
        timeNum:1
      })
    }else{
      this.setData({
        timeNum: num
      })
    }    
  }
})
