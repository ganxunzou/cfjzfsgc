
var data = [
  // { label: "遂道堵漏", imgs: "../../imgs/1.jpg" },
  { label: "地下室堵漏", imgs: "../../imgs/2.jpg" },
  { label: "止水带", imgs: "../../imgs/3.jpg" },
  { label: "防水卷材施工", imgs: "../../imgs/4.jpg" },
  { label: "防水涂料施工", imgs: "../../imgs/5.jpg" },
  { label: "厕浴间防水", imgs: "../../imgs/6.jpg" },
  // { label: "防腐保温（环氧树脂地坪）", imgs: "../../imgs/7.jpg" },ß
  { label: "外墙防水施工", imgs: "../../imgs/8.jpg" },
  { label: "上海外滩观光隧道堵漏", imgs: "../../imgs/9.jpg" },
  { label: "新亚药厂屋面\n防水", imgs: "../../imgs/10.jpg" },
  { label: "云间水庄\n防水工程", imgs: "../../imgs/11.jpg" },
  { label: "闵行电厂电缆隧道\n堵漏", imgs: "../../imgs/12.jpg" },
  { label: "浦东信息大厦\n堵漏", imgs: "../../imgs/13.jpg" },
  { label: "屋面防水\n(APP防水卷材)", imgs: "../../imgs/14.jpg" }
];

for (var i = 0; i < data.length; i++) {
  data[i].key = "key_" + i;
}

// pages/cpjs/cpjs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allist: data
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

  }
})