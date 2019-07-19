// pages/confirm-register/confirm-register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    patientPopupFlag: true,
    array1: ['李小璐  女  26岁', '张三  女  26岁', '李四  女  26岁', '王武  女  26岁'],
    array2: ['就诊卡：2581366', '医保卡：2546815', '就诊卡：2544588'],
    index1: null,
    index2: null,
    addFlag: true,
    value: [0],
    popupIndex: 0,
    checkedFlag: 0
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
   * 就诊人选择弹窗
   *  closeAddPatient 关闭弹窗
   *  bindChange 弹窗中的滚动绑定事件
   *  openAddPatient 打开弹窗
   *  sureAddPatient 弹窗确认按钮事件
   */
  closeAddPatient: function(e) {
    this.setData({
      index1: this.data.index1,
      index2: this.data.index2,
      addFlag: !this.data.addFlag
    })
  },
  bindChange: function(e) {
    const val = e;
    wx.setStorage({
      key: 'current',
      data: val,
    })
  },
  openAddPatient: function(e) {
    this.setData({
      addFlag: !this.data.addFlag,
      popupIndex: e.currentTarget.dataset.index
    })
  },
  sureAddPatient: function() {
    var _this = this;
    wx.getStorage({
      key: 'current',
      success: function(res) {
        let num = parseFloat(res.data.currentTarget.dataset.index);
        switch (num) {
          case 1:
            _this.setData({
              index1: res.data.detail.value[0]
            })
            break;
          case 2:
            _this.setData({
              index2: res.data.detail.value[0]
            })
            break;
        };
        _this.setData({
          addFlag: !_this.data.addFlag
        })
      },
    })
  },
  /**
   * 提示弹窗
   */
  msgPopup: function() {
    let text;
    if (!this.data.index1) {
      text = "请先选择就诊人";
    } else if (!this.data.index2) {
      text = "请先选择就诊卡或医保卡";
    } else if (!this.data.checkedFlag) {
      text = "请同意协议";
    }
    if (!this.data.index1) {
      wx.showModal({
        title: '提示',
        content: text,
        showCancel: false,
        confirmColor: '#1e7df7',
        confirmText: '知道了',
        success(res) {

        }
      })
    } else if (!this.data.index2) {
      wx.showModal({
        title: '提示',
        content: text,
        showCancel: false,
        confirmColor: '#1e7df7',
        confirmText: '知道了',
        success(res) {

        }
      })
    } else if (!this.data.checkedFlag) {
      wx.showModal({
        title: '提示',
        content: text,
        showCancel: false,
        confirmColor: '#1e7df7',
        confirmText: '知道了',
        success(res) {

        }
      })
    } else {
      console.log(1)
    }
  },
  /**
   * checkbox值的改变
   */
  checkboxChange: function(e) {
    this.setData({
      checkedFlag: e.detail.value.length
    })
  }
})