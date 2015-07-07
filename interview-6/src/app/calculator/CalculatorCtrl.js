angular.module('interviewApp')
.controller('CalculatorCtrl', [
  '$scope',
  '$timeout',
  
  'Storage',
  
  function ($scope, $timeout, Storage) {
    
    $scope.numericPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, '='];
    $scope.actionsPad = ['/', '*', '-', '+'];
    
    $scope.expression = 0;
    
    $scope.memo = Storage.fetch('calcs');
    
    $scope.showError = function () {
      $scope.isError = true;
      
      $timeout(function () {
        $scope.isError = false;
      }, 2000);
    };
    
    $scope.calc = function () {
      var value;
      var expressionBackup = $scope.expression;
      
      try {
        value = eval($scope.expression);
        $scope.expression = value;
      } catch (e) {
        $scope.showError();
        $scope.expression = expressionBackup;
      }
      
    };
    
    $scope.performAction = function (key) {
      if (key === '=') {
        // result
        Storage.add('calcs', $scope.expression);
        $scope.memo = Storage.fetch('calcs');
        $scope.calc();
      } else {
        // add symbol to display
        $scope.put(key);
      }
    };
    
    $scope.setExpression = function (item) {
      $scope.expression = item;
    };
  }
]);