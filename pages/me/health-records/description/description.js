import { $init, $digest } from '../../../../utils/util'

//获取应用实例
const app = getApp()

Page({
  data: {
    images: []
  },
  onLoad(e) {
    $init(this)
  },
  // 选择图片
  chooseImage(e) {
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
  },
  // 移除图片
  removeImage(e) {
    const index = e.currentTarget.dataset.index;
    this.data.images.splice(index, 1);
    $digest(this)
  },
  // 图片预览
  imgPreview(e) {
    const index = e.currentTarget.dataset.index;
    const images = this.data.images;
    wx.previewImage({
      current: images[index],
      urls: images,
    })
  }
})