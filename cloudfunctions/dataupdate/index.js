// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const mengDB = db.collection("meng_db")
// 云函数入口函数
exports.main = async (event, context) => {
  let res = mengDB.where({
    isDone:true
  }).update({
    data:{
      isDone:false
    }
  });
  return res;
}