// pages/about/about.js
Page({
  data: {
    markers: [{
      iconPath: "../../imgs/location.png",
      id: 0,
      latitude: 31.167800,
      longitude:121.429080,
      width: 15,
      height: 20,
      title:"上海春福建筑防水漕宝路分公司"
    }],
    markers2: [{
      iconPath: "../../imgs/location.png",
      id: 1,
      latitude: 31.206110,
      longitude:121.269740,
      width: 15,
      height: 20,
      title: "上海春福建筑防水北青公路分公司"
    }],
  },
  openMap1: function () {
    wx.openLocation({
      
      latitude: this.data.markers[0].latitude, // 纬度，范围为-90~90，负数表示南纬
      longitude: this.data.markers[0].longitude, // 经度，范围为-180~180，负数表示西经
      scale: 28, // 缩放比例          
    })
  },
  openMap2:function(){
    wx.openLocation({
      latitude: this.data.markers2[0].latitude, // 纬度，范围为-90~90，负数表示南纬
      longitude: this.data.markers2[0].longitude, // 经度，范围为-180~180，负数表示西经
      scale: 28, // 缩放比例          
    })
  },
  callPhone:function(){
    wx.makePhoneCall({
      phoneNumber: '13701687832' //仅为示例，并非真实的电话号码
    })
  }

})