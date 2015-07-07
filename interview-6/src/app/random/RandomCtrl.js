angular.module('interviewApp')
.controller('RandomCtrl', [
  '$scope',
  'Storage',
  
  function ($scope, Storage) {
    $scope.memo = Storage.fetch('numbers');
    
    $scope.generate = function () {
      var number = Math.floor(Math.random() * 100000);
      
      $scope.number = number;
      Storage.add('numbers', number);
      $scope.memo = Storage.fetch('numbers');
    };
  }
]);