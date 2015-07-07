angular.module('interviewApp')
.controller('HeaderCtrl', [
  '$scope',
  '$location',
  
  function ($scope, $locaiton) {
    $scope.menu = [{
      href: 'calculator',
      title: 'Calculator'
    }, {
      href: 'random',
      title: 'Random'
    }];
    
    $scope.isActive = function (href) {
      return $locaiton.path().indexOf(href) !== -1;
    };
  }
]);