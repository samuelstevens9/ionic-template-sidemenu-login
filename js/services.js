angular.module('starter.services', [])

.factory('ItemServive', function($rootScope,$http) {
  var _items = [
    {id:1,name:"Fritos"},
    {id:2,name:"Lays"},
    {id:3,name:"Cheetos"}
  ];
  var ItemServive = {};
  
  ItemServive.all = function(){
    return _items;
  }
  
  ItemServive.get = function(id){
    return _items[id];
  }
  
  return ItemServive;
})
;