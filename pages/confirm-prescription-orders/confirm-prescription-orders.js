// pages/confirm-prescription-orders/confirm-prescription-orders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:true,
    activeIndex:0
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
  toggleTab:function(e){
    this.setData({
      activeIndex:e.currentTarget.dataset.index
    })
  },
  //获取地址
  getLocation:function(){
    wx.showModal({
      title: '提示',
      content: '医事通想获取您当前的位置？',
      cancelText:'不允许',
      confirmText:'好',
      confirmColor:'#1e7df7',
      success(res){
        console.log(res)
        if(res.confirm){
          wx.getLocation({
            type: 'wgs84',
            altitude: true,
            success: function(res) {
              console.log(res)
            },
          })
        }
      }
    })
  }

})