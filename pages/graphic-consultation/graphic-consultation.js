// pages/graphic-consultation/graphic-consultation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPath:[],
    flag:false,
    patientPopupFlag:true,
    array: ['李小璐  女  26岁','张三  女  26岁', '李四  女  26岁', '王武  女  26岁'],
    index: 0,
    addFlag:true,
    value:[0]
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
   * 上传图片
  */
  chooseImg:function(){
    var that = this;
    wx.chooseImage({
      count:1, //上传图片数量限制
      sizeType: ['original', 'compressed'],// 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],// 可以指定来源是相册还是相机，默认二者都有 
      success: function(res) {  
        console.log(res);   
        that.data.imgPath.push(res.tempFilePaths);
        if (that.data.imgPath.length == 3){
          that.setData({
            flag:true
          })
        };
        that.setData({
          imgPath: that.data.imgPath
        })
      },
    });
  },
  /**
   * 显示提示弹窗
  */
  tipsPopup:function(){
    wx.showModal({
      title: '说明',
      content: '定向用户折扣实则为医生向其患者发放的福利，成为医生的患者可享受购买特殊折扣。请通过诊后报到等方式成为医生的患者。',
      showCancel:false,
      confirmText:"知道了",
      confirmColor:"#1e7df7",
      success(res){
        console.log(res);
      }
    })
  },
  /**
   * 删除图片
  */
  deleteImg:function(e){
    var that = this;
    let index = e.currentTarget.dataset.index;
    that.data.imgPath.splice(index,1);
    if(that.data.imgPath.length<3){
      that.setData({
        flag:false
      })
    }
    that.setData({
      imgPath:that.data.imgPath
    })
  },
  /**
   * 就诊人选择弹窗
  */
  closeAddPatient:function(e){
    this.setData({
      index:this.data.index,
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
  openAddPatient:function(){
    this.setData({
      addFlag:!this.data.addFlag
    })
  },
  sureAddPatient:function(){
    var _this = this;
    wx.getStorage({
      key: 'current',
      success: function(res) {
        _this.setData({
          index:res.data,
          addFlag:!_this.data.addFlag
        })
      },
    })
  }
})
