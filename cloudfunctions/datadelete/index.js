// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const todolist = db.collection("todo_list")
const _ = db.command;
// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await todolist.where({
      _id:_.in(event.id)
    }).remove();
  } catch (error) {
    console.log(error);
  }
}