// pages/prescription-order/prescription-order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 500,
    flag: false,
    dropdownFlag:true
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
  /**
   * dropdown
  */
  dropdown:function(){
    this.setData({
      dropdownFlag:!this.data.dropdownFlag
    })
  },
  /**
   * 展开全部
   */
  expendAll: function () {
    this.setData({
      height: 'auto',
      flag: true
    })
  },
  /**
   * 跳转详情通过不同的url显示不同的内容
   *  1 待确认
   *  2 待付款
   *  3 待收货
   *  4 审方中
   *  5 待发货
  */
  jumpPagesDtails:function(e){
    let sateNum = e.currentTarget.dataset.index;
    let url = "../../pages/prescription-order-details/prescription-order-details?stateCode=" + sateNum;
    wx.navigateTo({
      url: url,
    })
  }
})