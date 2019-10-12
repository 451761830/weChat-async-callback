//app.js
App({
  onLaunch: function () {
    console.log('onLaunch Start')
    this.getSystemInfoData().then((res) => {
      console.log('onLaunch getSystemInfo success ' + JSON.stringify(res))
      this.globalData.systemInfo = res
      if (this.getSystemInfoCallback) {
        this.getSystemInfoCallback(res)
      }
    }).catch((err) => {
      console.log('onLaunch getSystemInfo fail' + err)
      this.globalData.systemInfo = null
    })
  },
  getSystemInfoData () {
    return new Promise((resolve, reject) => {
      wx.getSystemInfo({
        success: (res) => {
          setTimeout(() => {
            resolve(res)
          }, 10000)
        },
        fail: (err) => {
          let errMsg = '获取系统信息失败' + JSON.stringify(err)
          reject(errMsg)
        }
      })
    })
  },
  globalData: {
    systemInfo: null
  }
})