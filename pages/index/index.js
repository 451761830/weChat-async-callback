//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    systemInfo: {},
  },
  onLoad: function () {
    console.log('onLoad')
    if (app.globalData.systemInfo) {
      console.log('has systemInfo')
      this.initData(app.globalData.systemInfo)
    } else {
      console.log('no systemInfo')
      app.getSystemInfoCallback = (res) => {
        console.log('callback systemInfo')
        this.initData(res)
      }
    }
  },
  initData(res) {
    console.log('initData')
    this.setData({
      systemInfo: res
    })
    console.log('onload systemInfo' + JSON.stringify(this.data.systemInfo))
  }
})
