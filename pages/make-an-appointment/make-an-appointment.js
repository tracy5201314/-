// pages/make-an-appointment/make-an-appointment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hospital:[
      {
        "hospitalName":'重庆医科大学附属一院',
        "department":"保健科",
        date:[
          {
            "week":"周一",
            "specificTime":"06.24"
          },
          {
            "week": "周二",
            "specificTime": "06.25"
          },
          {
            "week": "周三",
            "specificTime": "06.26"
          },
          {
            "week": "周四",
            "specificTime": "06.27"
          },
          {
            "week": "周五",
            "specificTime": "06.28"
          },
        ],
        sourcesNumber: [
          {
            details:[
              {
                "timeSlot": "08:30~09:00",
                "price": "100.00元",
                "surplusNum": 2
              },
              {
                "timeSlot": "09:00~09:30",
                "price": "100.00元",
                "surplusNum": 2
              },
              {
                "timeSlot": "09:30~10:00",
                "price": "100.00元",
                "surplusNum": 2
              },
              {
                "timeSlot": "10:30~11:00",
                "price": "100.00元",
                "surplusNum": 0
              },
              {
                "timeSlot": "11:00~12:00",
                "price": "100.00元",
                "surplusNum": 2
              },
              {
                "timeSlot": "13:30~14:00",
                "price": "100.00元",
                "surplusNum": 2
              },
              {
                "timeSlot": "14:00~15:30",
                "price": "100.00元",
                "surplusNum": 2
              },
            ]
          },
          {
            details:[]
          },
          {
            details: []
          },
          {
            details: []
          },
          {
            details: []
          },
        ],
        normalNum: 0,
        toggleFlag: true,
      },{
        "hospitalName": '重庆医科大学附属一院海扶医院',
        "department": "营养科",
        date: [
          {
            "week": "周一",
            "specificTime": "06.24"
          },
          {
            "week": "周二",
            "specificTime": "06.25"
          },
          {
            "week": "周三",
            "specificTime": "06.26"
          },
          {
            "week": "周四",
            "specificTime": "06.27"
          },
          {
            "week": "周五",
            "specificTime": "06.28"
          },
        ],
        sourcesNumber: [
          {
            details: [
              {
                "timeSlot": "08:30~09:00",
                "price": "100.00元",
                "surplusNum": 2
              },
              {
                "timeSlot": "09:00~09:30",
                "price": "100.00元",
                "surplusNum": 2
              },
              {
                "timeSlot": "09:30~10:00",
                "price": "100.00元",
                "surplusNum": 2
              },
              {
                "timeSlot": "10:30~11:00",
                "price": "100.00元",
                "surplusNum": 0
              },
              {
                "timeSlot": "11:00~12:00",
                "price": "100.00元",
                "surplusNum": 2
              },
              {
                "timeSlot": "13:30~14:00",
                "price": "100.00元",
                "surplusNum": 2
              },
              {
                "timeSlot": "14:00~15:30",
                "price": "100.00元",
                "surplusNum": 2
              },
            ]
          },
          {
            details: []
          },
          {
            details: [
              {
                "timeSlot": "08:30~09:00",
                "price": "100.00元",
                "surplusNum": 2
              },
              {
                "timeSlot": "09:00~09:30",
                "price": "100.00元",
                "surplusNum": 2
              },
              {
                "timeSlot": "09:30~10:00",
                "price": "100.00元",
                "surplusNum": 2
              },
              {
                "timeSlot": "10:30~11:00",
                "price": "100.00元",
                "surplusNum": 0
              },
              {
                "timeSlot": "11:00~12:00",
                "price": "100.00元",
                "surplusNum": 2
              },
              {
                "timeSlot": "13:30~14:00",
                "price": "100.00元",
                "surplusNum": 2
              },
              {
                "timeSlot": "14:00~15:30",
                "price": "100.00元",
                "surplusNum": 2
              },
            ]
          },
          {
            details: []
          },
          {
            details: [
              {
                "timeSlot": "08:30~09:00",
                "price": "100.00元",
                "surplusNum": 2
              },
              {
                "timeSlot": "09:00~09:30",
                "price": "100.00元",
                "surplusNum": 2
              },
              {
                "timeSlot": "09:30~10:00",
                "price": "100.00元",
                "surplusNum": 2
              },
              {
                "timeSlot": "10:30~11:00",
                "price": "100.00元",
                "surplusNum": 0
              },
              {
                "timeSlot": "11:00~12:00",
                "price": "100.00元",
                "surplusNum": 2
              },
              {
                "timeSlot": "13:30~14:00",
                "price": "100.00元",
                "surplusNum": 2
              },
              {
                "timeSlot": "14:00~15:30",
                "price": "100.00元",
                "surplusNum": 2
              },
            ]
          },
        ],
        normalNum: 0,
        toggleFlag: true,
      }
    ],
    
    
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
   * tab切换
  */
  tabToggle:function(e){
    let index = e.currentTarget.dataset.index;
    var hospital = "hospital[" + index + "].toggleFlag";
    var flag = !this.data.hospital[index].toggleFlag;
    this.setData({
      [hospital]: flag
    })
    for(let i=0;i<this.data.hospital.length;i++){
      var hospital = "hospital[" + i + "].toggleFlag"
      if(index!= i){
        this.setData({
          [hospital]: true
        })
      }
    }
  },

  /**
   * tab中的子项切换数据
  */
  switchingData:function(e){    
    let parentIndex = e.currentTarget.dataset.parentindex;
    let normalNum  = e.currentTarget.dataset.index;
    var hospital = "hospital[" + parentIndex + "].normalNum"
    this.setData({
      [hospital]: normalNum
    })
  },  
})