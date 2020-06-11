//app.js
App({
  onLaunch: function (options) {
    console.log(options)
    console.log("onLaunch")
  },
  onShow:function(options){
    console.log("onshow")
  },
  onHide:function(){
    console.log("onHide")
  },
  globalData: {
    userInfo: null
  }
})