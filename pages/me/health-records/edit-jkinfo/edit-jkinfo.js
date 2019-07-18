//获取应用实例
const app = getApp()

Page({
  data: {
    hunyinIndex: 0,
    hunyinArr: ['已婚', '未婚', '离异', '丧偶'],
    shengyuIndex: 0,
    shengyuArr: ['已生育', '未生育', '备孕期', '怀孕期'],
    shoushuArr: [
      { "state": 1, 'text': "暂无" },
      { "state": 0, 'text': "颅脑手术"},
      { "state": 0, 'text': "颈部手术" },
      { "state": 0, 'text': "烧伤" },
      { "state": 0, 'text': "骨折" },
      { "state": 0, 'text': "皮肤软组织损伤" },
      { "state": 0, 'text': "烫伤" },
      { "state": 0, 'text': "肌腱损伤" },
      { "state": 0, 'text': "刀砍伤"}
    ],
    guominArr: [
      { "state": 1, 'text': "暂无" },
      { "state": 0, 'text': "化妆品" },
      { "state": 0, 'text': "花粉" },
      { "state": 0, 'text': "牛奶" },
    ],
    bingshiArr: [
      { "state": 1, 'text': "暂无" },
      { "state": 0, 'text': "高血压" },
      { "state": 0, 'text': "心脏病" },
      { "state": 0, 'text': "哮喘" },
    ],
    xiguanArr: [
      { "state": 1, 'text': "暂无" },
      { "state": 0, 'text': "吸烟" },
      { "state": 0, 'text': "喝酒" },
      { "state": 0, 'text': "熬夜" },
    ],
    // shoushuIndex: 0,
    // shoushuArr: ['暂无', '颅脑手术', '颈部手术', '烧伤', '骨折', '皮肤软组织损伤', '烫伤', '肌腱损伤', '刀砍伤'],
    // guominIndex: 0,
    // guominArr: ['暂无', '化妆品', '花粉', '牛奶'],
    // bingshiIndex: 0,
    // bingshiArr: ['暂无', '高血压', '心脏病', '哮喘'],
    // xiguanIndex: 0,
    // xiguanArr: ['暂无', '吸烟', '喝酒', '熬夜']
  },
  tapChangeHy(e){
    this.setData({ hunyinIndex: e.currentTarget.dataset.index })
  },
  tapChangeSy(e) {
    this.setData({ shengyuIndex: e.currentTarget.dataset.index })
  },
  tapChangeSs(e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.shoushuArr[index].state == 1) {
      this.data.shoushuArr[index].state = 0;
    } else if (this.data.shoushuArr[index].state == 0) {
      this.data.shoushuArr[index].state = 1;
    }
    this.setData({ shoushuArr: this.data.shoushuArr })
  },
  tapChangeGm(e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.guominArr[index].state == 1) {
      this.data.guominArr[index].state = 0;
    } else if (this.data.guominArr[index].state == 0) {
      this.data.guominArr[index].state = 1;
    }
    this.setData({ guominArr: this.data.guominArr })
  },
  tapChangeBs(e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.bingshiArr[index].state == 1) {
      this.data.bingshiArr[index].state = 0;
    } else if (this.data.bingshiArr[index].state == 0) {
      this.data.bingshiArr[index].state = 1;
    }
    this.setData({ bingshiArr: this.data.bingshiArr })
  },
  tapChangeXg(e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.xiguanArr[index].state == 1) {
      this.data.xiguanArr[index].state = 0;
    } else if (this.data.xiguanArr[index].state == 0) {
      this.data.xiguanArr[index].state = 1;
    }
    this.setData({ xiguanArr: this.data.xiguanArr })
  }
})