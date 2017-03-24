//<tree list="list"></tree>
(function(){
  angular.module('APP')
  .directive('tree',function() {
    return{
      restrict: 'EA',
      scope: {
        list : '='
      },
      templateUrl: "app/common/components/tree/tree.html",
      controller: ['$scope',function($scope) {


        $scope.test = function(li) {
          li.bool = !li.bool;
          console.log(li);
        }
        $scope.delete = function(data) {
          data.show=false;
          if(data.nodes) {
          data.nodes = [];
          }
          console.log(data);
        }
        $scope.create = function(data) {
          console.log(data);
          if(!data.nodes) {
            data.nodes=[];
          }
          data.nodes.push(  {
              show: true,
              name:'node11',
              bool:true,
              type:'folder'
            })
        }
      }]
    }
  });

}
)();
