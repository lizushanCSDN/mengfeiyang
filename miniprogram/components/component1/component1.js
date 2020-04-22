// components/component1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    str: {
      type: String,
      value: "你好"
    }
  },
  options: {
    styleIsolation: 'shared',
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的初始数据
   */
  data: {
    num: 0,
    obj: {
      name: "xiao a",
      age: 10
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addHandle() {
      this.setData({
        num: this.data.num + 1
      })
      this.setData({
        "obj.name": "xiao b"
      })
    },
    btnHandle() {
      this.triggerEvent("myevent", {
        id: 123
      });
    }
  },
  observers:{
    "obj.name":function(val){
      console.log(val);
    },
    num(val){
      console.log(val);
    }
  }
})