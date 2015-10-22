angular.module('simple.simpledates', [])
.factory('simpledates', function ($rootScope) {
	//var simpledates = {}
	return {
		Timestamp:function(){
			var td = new Date();
			return td.getTime();
		},
		TodayString: function(){
			var td = new Date();
      var y = td.getFullYear()
      var m = td.getMonth()+1;
      var d = td.getDate();
      return y+'-'+(m<10?'0':'')+m+'-'+(d<10?'0':'')+d;
		},
		ThisMonthLastYear: function(){
			var d = new Date();
			d.setYear(d.getFullYear()-1);
			return d;
		},
		DateString: function(date){
			var y = date.getFullYear()
      var m = date.getMonth()+1;
      var d = date.getDate();
      return y+'-'+(m<10?'0':'')+m+'-'+(d<10?'0':'')+d;
		},
		ParseStamp:function(date_str){
			var td = new Date(date_str);
			return td.getTime();
		},
		AddMonthDate: function(m,date){
			if(!date){
				d = new Date();
			}else{
				d = new Date(date.getTime())
			}
			if(m){
				d.setMonth(date.getMonth()+m);
			}
			return d;
		},
		DateAgoString: function(d1,d2){
			var delta = (d1 - d2) / 1000;
			//if less than 60 (1 minute) return seconds
			if(delta < 60){
				return Math.floor(delta)+' seconds';
			}
			//if less than 60*60 (1 hour) return minutes
			if(delta < 3600){
				return Math.floor(delta / 60)+' minutes';
			}
			//if less than 60*60*24 (1 day) return hours
			if(delta < 86400){
				return Math.floor(delta / 3600)+' hours';
			}
			//else return days
			return Math.floor(delta / 86400)+' days';
		}
	}
})
