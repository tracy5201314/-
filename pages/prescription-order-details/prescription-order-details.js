// pages/prescription-order-details/prescription-order-details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state: null, //状态定义
    stateText: '', //状态文字
    stateTips: "请确认处方详细信息，确认订单后才能进行支付", //状态默认提示文字
    flag:true   //是否显示待收货信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //  1 待确认  2 待付款 3 待收货 4 审方中 5 待发货 6 已关闭 7 已完成/已取消/已失效
    var _this = this;
    console.log(options.stateCode)
    switch (options.stateCode) {
      case '1':
        _this.setData({
          state: options.stateCode,
          stateText: '待确认'
        });
        break;
      case '2':
        _this.setData({
          state: options.stateCode,
          stateText: '待付款'
        });
        break;
      case '3':
        _this.setData({
          state: options.stateCode,
          stateText: '待收货',
          stateTips:'处方要已发货，请耐心等待',
          flag:false
        });
        break;
      case '4':
        _this.setData({
          state: options.stateCode,
          stateText: '审方中',
          stateTips:'等待药师审核处方',
          flag: false
        });
        break;
      case '5':
        _this.setData({
          state: options.stateCode,
          stateText: '待发货',
          stateTips:'等待发货',
          flag: false
        });
        break;
      case '6':
        _this.setData({
          state: options.stateCode,
          stateText: '已关闭',
          stateTips: '审方未通过，患者不要了',
          flag: false
        });
        break;
      case '7':
        _this.setData({
          state: options.stateCode,
          stateText: '已完成/已取消/已失效',
          stateTips: '已完成/已取消/已失效',
          flag: false
        });
        break;
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})