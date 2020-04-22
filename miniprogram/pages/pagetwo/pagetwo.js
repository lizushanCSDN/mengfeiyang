// miniprogram/pages/pagetwo/pagetwo.js
const db = wx.cloud.database(); //初始化数据库
const mengDB = db.collection("meng_db"); //获取数据库中某个集合
const _ = db.command //定义查询指令
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inpVal: ""
  },
  //获取文本框中的值
  getInpVal(e) {
    this.setData({
      inpVal: e.detail.value
    })
  },
  //向数据库中添加数据
  addHandle() {
    // mengDB.add({
    //   data:{
    //     inpVal:this.data.inpVal,
    //     isDone:false
    //   }
    // }).then((res)=>{
    //   console.log(res);
    // })

  },

  // 查询数据库内容
  findHandle() {
    //全部查询
    // mengDB.get({
    // }).then((res)=>{
    //   console.log(res)
    // })

    //指定查询
    // mengDB.doc("e62331e95e9a6c410053d53467ef0dfc").get().then((res)=>{
    //   console.log(res)
    // })

    //获取集合中的部分数据（isDone 为 true 的数据）
    // mengDB.where({
    //   isDone:true
    // }).get().then((res)=>{
    //   console.log(res);
    // })

    //获取集合中的部分数据利用指令（inpVal 中 等于 hello和mengyang 数据）
    // mengDB.where({
    //   inpVal:_.in(["hello","mengyang"])
    // }).get().then((res)=>{
    //   console.log(res);
    // })
  },

  // 修改数据库内容
  updateHandle() {
    //   mengDB.doc("f149f6775e9a6c59005c47fe7a076745").update({
    //     data:{
    //       isDone:false
    //     }
    //   }).then((res)=>{
    //     console.log(res);
    //   })

    //累加
    // mengDB.doc("f149f6775e9a6c59005c47fe7a076745").update({
    //   data: {
    //     num: _.inc(1)
    //   }
    // }).then((res) => {
    //   console.log(res);
    // })
    
    //给数组添加值
    mengDB.doc("f149f6775e9a6c59005c47fe7a076745").update({
      data:{
        arr:_.push("hello")
      }
    }).then((res)=>{
      console.log(res);
    })
  },
//删除指定的一条记录
  deleteHandle(){
    mengDB.doc("b389c5465e9a6c4800442ebd1c576ee4").remove().then((res)=>{
      console.log(res);
    })
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