var data=[
    { label:"我们可以全面服务您关于防水堵漏的需要。"},
    { label: "我们免费进行施工现场勘查、申报施工价格、制定施工技术方案。" },
    { label: "我们技术人员配备齐全、施工队伍实力雄厚、操作规范、选材合理，并以建设GB50207-94GB50038-94防水工程技术规范作为施工操作及质量验收标准。" },
    { label: "我们对防水工程施工质量，根据客户选定材料承诺2—5年质量保修期，在保修期内实行每年一次免费质量维护和用户回访制度。防水工程竣工后，提供防水施工质量保修联系卡，作为保修依据，对施工质量实行跟踪服务。" },
    { label: "选购我们防水材料，均可提供免费咨询与施工技术指导，并送货上门。" },
    { label: "建筑装潢客户长期分包合作，免费制定施工技术方案，并实行施工人工费价格双方协商拟定。" }
  ];

for(var i=0;i<data.length;i++)
{
  data[0].key = "key_"+i;
}

// pages/fwcn/fwcn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fwlist:data
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