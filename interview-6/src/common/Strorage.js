angular.module('interviewApp')
.factory('Storage', [
  function () {
    
    var fetch = function (name) {
      var data = localStorage[name];
      var list;
      
      if (data) {
        list = angular.fromJson(data);
      } else {
        list = [];
      }
      
      return list;
    };
    
    var add = function (name, value) {
      list = fetch(name);
      
      if (list.indexOf(value) === -1) {
        list.unshift(value);
        if (list.length > 10) {
          list = list.slice(0, 10);
        }
        localStorage[name] = angular.toJson(list);
      }
    };
    
    return {
      add: add,
      fetch: fetch
    };
  }
]);