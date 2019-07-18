// pages/registered-order/registered-order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 895,
    flag: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  },
  /**
   * 展开全部
   */
  expendAll: function() {
    this.setData({
      height: 'auto',
      flag: true
    })
  },
  /**
   * 退号提示弹窗
  */
  retreatOrder:function(){
    wx.showModal({
      title: '提示',
      content: '是否确认退号？',
      confirmColor:'#1e7df7',
      success(res){
        if(res.confirm){
          wx.navigateTo({
            url: '../../pages/registered-order-details/registered-order-details',
          }),
          wx.setStorage({
            key: 'state',
            data: 'true',
          })
        }
      }
    })
  },
  /**
   * 支付提示弹窗
  */
  payOrder:function(){
    wx.showModal({
      title: '提示',
      content: '请在3分钟内完成支付，逾期作废',
      confirmColor:'#1e7df7',
      success(res){
        if (res.confirm) {
          wx.navigateTo({
            url: '../../pages/registered-order-details/registered-order-details',
          })
            wx.setStorage({
              key: 'state',
              data: 'false',
            })
        }
      }
    })
  },
  /**
   * 支付时间过期提示
  */
  overdueOrder:function(){
    wx.showModal({
      title: '提示',
      content: '支付有效期为15分钟，当前订单已过期，请重新预约。',
      showCancel:false,
      confirmText:'知道了',
      confirmColor:'#1e7df7',
      success(res){
        
      }
    })
  }
})