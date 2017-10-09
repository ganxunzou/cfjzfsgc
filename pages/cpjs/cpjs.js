
var data =[
  { label:"一、卷材类",data:[
    { label:"SBS 防水卷材",imgs:"../../imgs/c1.jpg"},
    { label: "改性沥青防水卷材", imgs: "../../imgs/c2.jpg" },
    { label: "高分子防水卷材", imgs: "../../imgs/c3.jpg" },
  ], "tBgColor": "#4ED6C2"},
  { label: "二、防水涂料类", data: [
    { label: "851 聚氨脂\n防水涂料", imgs: "../../imgs/c4.jpg" },
    { label: "JS 聚合物\n防水涂料", imgs: "../../imgs/c5.jpg" },
    { label: "951 彩色丙烯酸\n弹性防水涂料", imgs: "../../imgs/c6.jpg" },
    { label: "高分子防水材料", imgs: "../../imgs/c7.jpg" },
    { label: "高分子防水材料", imgs: "../../imgs/c8.jpg" },
    {
      label: "911非焦油聚氨脂\n地下建筑防水涂料", imgs: "../../imgs/c9.jpg" },
  ], "tBgColor": "#F9BD39" },
  { label: "三、外墙防水", data: [
    { label: "裂缝透明防水涂料", imgs: "../../imgs/c10.jpg" },
    { label: "外墙透明防水涂料", imgs: "../../imgs/c11.jpg" },
    { label: "渗透结膜防水涂料", imgs: "../../imgs/c12.jpg" }
  ], "tBgColor": "#4ED6C2" },
  { label: "四、厕所、浴室、厨房间防水", data: [
    { label: "水不漏系列\n封堵材料", imgs: "../../imgs/c13.jpg" },
    { label: "毛细孔密封\n气雾防水剂", imgs: "../../imgs/c14.jpg" },
    { label: "水泥外加抗渗微晶", imgs: "../../imgs/c15.jpg" },
  ], "tBgColor": "#F9BD39" },
  { label: "五、地下室、水池、隧道、电梯井、大坝堵漏", data: [
    { label: "进口高压注浆机", imgs: "../../imgs/c16.jpg" },
    { label: "水性、油性膨胀堵漏剂", imgs: "../../imgs/c17.jpg" },
  ], "tBgColor": "#4ED6C2" },
  // { label: "六、保温、防腐", data: [
  //   { label: "JG 高强度防水保温板", imgs: "../../imgs/c18.jpg" },
  //   { label: "环氧树脂地坪", imgs: "../../imgs/c19.jpg" },
  // ], "tBgColor": "#F9BD39" }
];


for(var i=0;i<data.length;i++)
{
   data[i].key = "c_"+i;
   for(var j=0;j<data[i].data.length;j++)
   {
     data[i].data[j].key="s_"+j;
   }
}

// pages/cpjs/cpjs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cplist:data
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
  imgClickHandler:function(e){
    // console.log(e.currentTarget.dataset.cp.imgs);
    // wx.previewImage({
    //   urls: ["http://www.fangshuigs.com/image/page02_clip_image001.jpg"]
    // })
  }
})