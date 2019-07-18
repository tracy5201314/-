import { $init, $digest } from '../../utils/util'

//获取应用实例
const app = getApp()

Page({
  data: {
    height: 200,
    images: []
  },
  onLoad: function(options){
    let wH = wx.getSystemInfoSync().windowHeight;
    let wW = wx.getSystemInfoSync().windowWidth;
    this.setData({ height: wH * 750 / wW - 185});

    $init(this);
  },
  // 选择表情
  chooseIcon(){},
  // 选择图片
  chooseImage(e){
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const images = that.data.images.concat(res.tempFilePaths)
        // 最多3张图片
        that.data.images = images.length <= 3 ? images : images.slice(0, 3)
        $digest(that)
      },
    })
  }
})