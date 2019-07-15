// pages/graphic-consultation/graphic-consultation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPath:[],
    flag:false
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
    console.log(e)
  },
  /**
   * 上传图片
  */
  chooseImg:function(){
    var that = this;
    wx.chooseImage({
      count:3, //上传图片数量限制
      sizeType: ['original', 'compressed'],// 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],// 可以指定来源是相册还是相机，默认二者都有 
      success: function(res) {      
        that.data.imgPath.push(res.tempFilePaths);
        console.log(that.data.imgPath)

        if (that.data.imgPath.length == 3){
          that.setData({
            flag:true
          })
        };
        that.setData({
          imgPath: that.data.imgPath
        })
        console.log(that.data.flag)
      },
    });
  }
})