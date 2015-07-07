angular.module('interviewApp')
.directive('editableInput', [
  function () {
    return {
      restrict: 'A',
      
      scope: {
        put: '='
      },
      
      link: function ($scope, $element) {
        var element = $element[0];
        
        $scope.put = function (symbol) {
          var value = element.value;
          
          // after initialization
          if (value === '0') {
            element.value = symbol;
            $element.trigger('change');
            return;
          }
          
          var pos = element.selectionStart;
          
          var valueBegin = value.slice(0, pos);
          var valueEnd = value.slice(pos);
          
          var newValue = valueBegin + symbol + valueEnd;
          
          element.value = newValue;
          $element.trigger('change');
        };
      }
    };
  }
]);