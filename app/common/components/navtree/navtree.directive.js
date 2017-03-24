angular.module('APP')
.directive('navtree', function() {
  return {
    restrict: 'EA',
    scope: {
      array: '='
    },
    templateUrl: 'app/common/components/navtree/navtree.html',
  controller: function($scope) {
    $scope.test =function(arr) {
      arr.l2 = [
        {
          name:'four'
        },
        {
          name:'five'
        }
      ];
        console.log(arr);
    }
  }
}
});
