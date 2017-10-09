var data =[
  { title: "防水工程", desc: "建筑屋面防水\n外墙面防水\n厨房卫生间防水\n阳台窗台防水 ", "tColor": "#B0F7FE", "cColor":"#43D3ED","cHeight":"300rpx"},
  { title: "堵漏工程", desc: "地下室堵漏\n电梯井堵漏\n隧道堵漏\n水池堵漏\n外贴式止水带安装", "tColor": "#B0F7FE", "cColor": "#43D3ED", "cHeight": "300rpx"},
  { title: "高空作业", desc: "外墙面清洗\n外墙面涂料油漆喷漆\n石材翻新养护", "tColor": "#FCE2A9", "cColor": "#EEB638", "cHeight": "280rpx"},
  { title: "防水材料", desc: "经营多种防水卷材\n防水涂料\n混凝土抗渗添加剂等防水堵漏材料及机械", "tColor": "#FCE2A9", "cColor": "#EEB638", "cHeight": "280rpx" }

];


for(var i=0;i<data.length;i++)
{
  data[i].key ="key_"+i;
}

var current = 0;
var swiperImgs= [
  { imgs: '../../imgs/b1.png', pages: "/pages/ylcp/ylcp" },
  { imgs: '../../imgs/b2.png', pages: "/pages/ylcp/ylcp" }
];

for (var i = 0; i < swiperImgs.length;i++)
{
  swiperImgs[0].key ="key_"+i;
}

// pages/fwxm/fwxm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fwlist:data,
    imgUrls: swiperImgs,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },

  swiperTab:function(e){
    console.log("swipertab");
    var url = e.currentTarget.dataset.pages;
    console.log(url);
    wx.navigateTo({
      url: url,
      success: function(res) {
        //console.log(res)
      },
      fail: function(res) {
        //console.log(res)
      },
      complete: function(res) {
       // console.log(res)
      },
    })
  },
  swiperChanged:function(e){
    current = e.detail.current;
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