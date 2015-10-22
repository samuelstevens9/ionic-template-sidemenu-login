angular.module('simple.notifications', [])
.factory('SimpleNotifications', function ($rootScope,$state,$ionicHistory,$localstorage,$cordovaLocalNotification) {
  var SimpleNotifications = {}
  // Listeners 
  $rootScope.$on('$cordovaLocalNotification:click',
    function (event, notification, state) {
      //console.log(event,notification,state,notification.data);
      if(notification.data){
        var ndata = JSON.parse(notification.data)
        //console.log('notification data',ndata);
        if(ndata.state_go){
          $ionicHistory.nextViewOptions({
            disableAnimate: true,
            disableBack: true
          });
          $state.go(ndata.state_go, ndata.state_params);
        }
      }
  });
  $rootScope.$on('$cordovaLocalNotification:clear',
    function (event, notification, state) {
      console.log(event,notification,state);
  });
  $rootScope.$on('$cordovaLocalNotification:clearall',
    function (event, notification, state) {
      console.log(event,notification,state);
  });
  
  SimpleNotifications.cancelAll = function(){
    $cordovaLocalNotification.cancelAll(function() { return true; }, this);
  }
  
  SimpleNotifications.cancelReadReminder = function(nid){
    $cordovaLocalNotification.cancel(nid, function() {
      return true;
    });
  }
  SimpleNotifications.scheduleReadReminder = function (frequency,title,text,data) {
    SimpleNotifications.cancelReadReminder(1);
    var now = new Date().getTime();
    var _10SecondsFromNow = new Date(now + 10 * 1000);
    var _5MinutesFromNow = new Date(now + 5*60 * 1000);
    var _1DayFromNow = new Date(now + 24*3600 * 1000);
    

    $cordovaLocalNotification.schedule({
      id: 1,
      title: title,
      text: text,
      //at: _10SecondsFromNow,
      firstAt: _10SecondsFromNow,
      every: frequency,//'day','week','month'
      sound: null,
      data: data
    }).then(function (result) {
      console.log('then of the schedule notification',frequency);
    });
  };
  
  
  
  return SimpleNotifications;
  
  
  
  
  
  /*
  cordova.plugins.notification.local.hasPermission(function(granted){
    if(granted == true)
    {
      //schedule(id, title, message, schedule_time);
      console.log('notification is allowed');
    }
    else
    {
      console.log('notification permission needs to be given');
      cordova.plugins.notification.local.registerPermission(function(granted) {
        if(granted == true)
        {
          console.log('notification granted');
          //schedule(id, title, message, schedule_time);
        }
        else
        {
          navigator.notification.alert("Reminder cannot be added because app doesn't have permission");
        }
      });
    }
  });
  */
})
;