// pages/selection-departments/selection-departments.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    departmentData:[
      {
        "departmentName":"骨科",
        "smallDepartment": ["肺癌专科1", "胃肠肿瘤多学科会诊1","西区五楼胃肠肿瘤学科1"]
      },
      {
        "departmentName": "妇产科",
        "smallDepartment": ["肺癌专科2", "胃肠肿瘤多学科会诊2", "西区五楼胃肠肿瘤学科2"]
      },
      {
        "departmentName": "皮肤性病科",
        "smallDepartment": ["肺癌专科3", "胃肠肿瘤多学科会诊3", "西区五楼胃肠肿瘤学科3"]
      },
      {
        "departmentName": "男科",
        "smallDepartment": ["肺癌专科4", "胃肠肿瘤多学科会诊4", "西区五楼胃肠肿瘤学科4"]
      },
      {
        "departmentName": "口腔科",
        "smallDepartment": ["肺癌专科5", "胃肠肿瘤多学科会诊5", "西区五楼胃肠肿瘤学科5"]
      },
      {
        "departmentName": "肿瘤科",
        "smallDepartment": ["肺癌专科6", "胃肠肿瘤多学科会诊6", "西区五楼胃肠肿瘤学科6"]
      },
      {
        "departmentName": "中医科",
        "smallDepartment": ["肺癌专科7", "胃肠肿瘤多学科会诊7", "西区五楼胃肠肿瘤学科7"]
      },
      {
        "departmentName": "精神科",
        "smallDepartment": ["肺癌专科8", "胃肠肿瘤多学科会诊8", "西区五楼胃肠肿瘤学科8"]
      },
      {
        "departmentName": "康复医学科",
        "smallDepartment": ["肺癌专科9", "胃肠肿瘤多学科会诊9", "西区五楼胃肠肿瘤学科9"]
      },
      {
        "departmentName": "急诊医学科",
        "smallDepartment": ["肺癌专科10", "胃肠肿瘤多学科会诊10", "西区五楼胃肠肿瘤学科10"]
      },
      {
        "departmentName": "护理门诊",
        "smallDepartment": ["肺癌专科11", "胃肠肿瘤多学科会诊11", "西区五楼胃肠肿瘤学科11"]
      },
    ],
    nomalHeight:400,
    normalIndex:5
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let query = wx.createSelectorQuery();
    let windowHeight = wx.getSystemInfoSync().windowHeight;
    let that = this;
    query.select('.other').boundingClientRect(rect => {
      let height = windowHeight - rect.height;
      that.setData({
        nomalHeight: height
      })
    }).exec();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let query = wx.createSelectorQuery();
    let windowHeight = wx.getSystemInfoSync().windowHeight;
    let that = this;
    query.select('.other').boundingClientRect(rect => {
      let height = windowHeight-rect.height;
      that.setData({
        nomalHeight:height
      })
    }).exec();
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
   * tab切换函数
  */
  tab:function(e){
    var index  = e.currentTarget.dataset.index;
    this.setData({
      normalIndex:index
    })
  }
})