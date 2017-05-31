// var mymodule= angular.module('mymodule',[]);
// mymodule.controller('mycontroller',['$scope',function($scope){
//   $scope.data="data of first controller is here";
// }]);


angular.module('APP', [])

.directive('collection', function () {
	return {
		restrict: "E",
		replace: true,
		scope: {
			collection: '='
		},
		templateUrl: "app/collection.html",
		controller:function($scope){
			$scope.test=function() {
				$scope.collection.push({
					name: 'test19'
				});
				console.log($scope.collection)
			}
		}
	}
})

.directive('member', function ($compile) {
	return {
		restrict: "E",
		replace: true,
		scope: {
			member: '='
		},
		//	transclude: true,
		templateUrl: 'app/popup.html',
		controller: function($scope) {
			$scope.toggle=true;
		},
		link: function (scope, element, attrs, ctrl) {

			if (angular.isArray(scope.member.children)) {
				element.append("<collection collection='member.children'></collection>");
				$compile(element.contents())(scope)
			}
		}
	}
})

.controller('IndexCtrl', ['$scope', '$filter', function ($scope, $filter) {
	var tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
		console.log($filter('date')(tomorrow));
	$scope.level1 =
	[
		{
			name: 'test1',
			type: 'folder',
			children: [
				{
					name: 'test3'
				},
				{
					name: 'test4'
				}
			]
		},
		{
			name: 'test2'
		}
	]
	$scope.list=[
		{
			show: true,
			name: 'node1',
			bool:true,
			nodes: [
				{
					show: true,
					name:'node2',
					bool:true,
					type:'folder',
					nodes: [
						{
							show: true,
							name:'node5',
								bool:true,
							type:'folder'
						},
						{
							show: true,
							name:'node6',
								bool:true,
							type:'folder'
						},
						{
							show: true,
							name:'node7',
								bool:true,
							type:'folder'
						}
					],
				}
			],
			type:'folder'
		},
		{
			show: true,
			name:'node3',
				bool:true
		}
	];
	$scope.array = [
		{
			name:'one'
		},
		{
			name:'two'
		},
		{
			name:'three'
		}
		];
}]);

// angular.module('mymodule').controller('newController',['$scope',function($scope) {
//   $scope.data = "This is new Data from The Dark night";
// }]);

//<tree list="list"></tree>
(function(){
  angular.module('APP')
  .directive('tree',function() {
    return{
      restrict: 'EA',
      scope: {
        list : '='
      },
      templateUrl: "common/components/tree/tree.html",
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm5ld2FwcC5qcyIsImNvbW1vbi9jb21wb25lbnRzL3RyZWUvdHJlZS5kaXJlY3RpdmUuanMiLCJjb21tb24vY29tcG9uZW50cy9uYXZ0cmVlL25hdnRyZWUuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1SEE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdmFyIG15bW9kdWxlPSBhbmd1bGFyLm1vZHVsZSgnbXltb2R1bGUnLFtdKTtcbi8vIG15bW9kdWxlLmNvbnRyb2xsZXIoJ215Y29udHJvbGxlcicsWyckc2NvcGUnLGZ1bmN0aW9uKCRzY29wZSl7XG4vLyAgICRzY29wZS5kYXRhPVwiZGF0YSBvZiBmaXJzdCBjb250cm9sbGVyIGlzIGhlcmVcIjtcbi8vIH1dKTtcblxuXG5hbmd1bGFyLm1vZHVsZSgnQVBQJywgW10pXG5cbi5kaXJlY3RpdmUoJ2NvbGxlY3Rpb24nLCBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6IFwiRVwiLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHtcblx0XHRcdGNvbGxlY3Rpb246ICc9J1xuXHRcdH0sXG5cdFx0dGVtcGxhdGVVcmw6IFwiYXBwL2NvbGxlY3Rpb24uaHRtbFwiLFxuXHRcdGNvbnRyb2xsZXI6ZnVuY3Rpb24oJHNjb3BlKXtcblx0XHRcdCRzY29wZS50ZXN0PWZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkc2NvcGUuY29sbGVjdGlvbi5wdXNoKHtcblx0XHRcdFx0XHRuYW1lOiAndGVzdDE5J1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc29sZS5sb2coJHNjb3BlLmNvbGxlY3Rpb24pXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59KVxuXG4uZGlyZWN0aXZlKCdtZW1iZXInLCBmdW5jdGlvbiAoJGNvbXBpbGUpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogXCJFXCIsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZToge1xuXHRcdFx0bWVtYmVyOiAnPSdcblx0XHR9LFxuXHRcdC8vXHR0cmFuc2NsdWRlOiB0cnVlLFxuXHRcdHRlbXBsYXRlVXJsOiAnYXBwL3BvcHVwLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuXHRcdFx0JHNjb3BlLnRvZ2dsZT10cnVlO1xuXHRcdH0sXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCkge1xuXG5cdFx0XHRpZiAoYW5ndWxhci5pc0FycmF5KHNjb3BlLm1lbWJlci5jaGlsZHJlbikpIHtcblx0XHRcdFx0ZWxlbWVudC5hcHBlbmQoXCI8Y29sbGVjdGlvbiBjb2xsZWN0aW9uPSdtZW1iZXIuY2hpbGRyZW4nPjwvY29sbGVjdGlvbj5cIik7XG5cdFx0XHRcdCRjb21waWxlKGVsZW1lbnQuY29udGVudHMoKSkoc2NvcGUpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59KVxuXG4uY29udHJvbGxlcignSW5kZXhDdHJsJywgWyckc2NvcGUnLCAnJGZpbHRlcicsIGZ1bmN0aW9uICgkc2NvcGUsICRmaWx0ZXIpIHtcblx0dmFyIHRvbW9ycm93ID0gbmV3IERhdGUoKTtcblx0dG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvdy5nZXREYXRlKCkgKyAxKTtcblx0XHRjb25zb2xlLmxvZygkZmlsdGVyKCdkYXRlJykodG9tb3Jyb3cpKTtcblx0JHNjb3BlLmxldmVsMSA9XG5cdFtcblx0XHR7XG5cdFx0XHRuYW1lOiAndGVzdDEnLFxuXHRcdFx0dHlwZTogJ2ZvbGRlcicsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ3Rlc3QzJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ3Rlc3Q0J1xuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAndGVzdDInXG5cdFx0fVxuXHRdXG5cdCRzY29wZS5saXN0PVtcblx0XHR7XG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0bmFtZTogJ25vZGUxJyxcblx0XHRcdGJvb2w6dHJ1ZSxcblx0XHRcdG5vZGVzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0XHRcdG5hbWU6J25vZGUyJyxcblx0XHRcdFx0XHRib29sOnRydWUsXG5cdFx0XHRcdFx0dHlwZTonZm9sZGVyJyxcblx0XHRcdFx0XHRub2RlczogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRuYW1lOidub2RlNScsXG5cdFx0XHRcdFx0XHRcdFx0Ym9vbDp0cnVlLFxuXHRcdFx0XHRcdFx0XHR0eXBlOidmb2xkZXInXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRuYW1lOidub2RlNicsXG5cdFx0XHRcdFx0XHRcdFx0Ym9vbDp0cnVlLFxuXHRcdFx0XHRcdFx0XHR0eXBlOidmb2xkZXInXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRuYW1lOidub2RlNycsXG5cdFx0XHRcdFx0XHRcdFx0Ym9vbDp0cnVlLFxuXHRcdFx0XHRcdFx0XHR0eXBlOidmb2xkZXInXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0fVxuXHRcdFx0XSxcblx0XHRcdHR5cGU6J2ZvbGRlcidcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHRuYW1lOidub2RlMycsXG5cdFx0XHRcdGJvb2w6dHJ1ZVxuXHRcdH1cblx0XTtcblx0JHNjb3BlLmFycmF5ID0gW1xuXHRcdHtcblx0XHRcdG5hbWU6J29uZSdcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6J3R3bydcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6J3RocmVlJ1xuXHRcdH1cblx0XHRdO1xufV0pO1xuIiwiLy8gYW5ndWxhci5tb2R1bGUoJ215bW9kdWxlJykuY29udHJvbGxlcignbmV3Q29udHJvbGxlcicsWyckc2NvcGUnLGZ1bmN0aW9uKCRzY29wZSkge1xuLy8gICAkc2NvcGUuZGF0YSA9IFwiVGhpcyBpcyBuZXcgRGF0YSBmcm9tIFRoZSBEYXJrIG5pZ2h0XCI7XG4vLyB9XSk7XG4iLCIvLzx0cmVlIGxpc3Q9XCJsaXN0XCI+PC90cmVlPlxuKGZ1bmN0aW9uKCl7XG4gIGFuZ3VsYXIubW9kdWxlKCdBUFAnKVxuICAuZGlyZWN0aXZlKCd0cmVlJyxmdW5jdGlvbigpIHtcbiAgICByZXR1cm57XG4gICAgICByZXN0cmljdDogJ0VBJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIGxpc3QgOiAnPSdcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZVVybDogXCJjb21tb24vY29tcG9uZW50cy90cmVlL3RyZWUuaHRtbFwiLFxuICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLGZ1bmN0aW9uKCRzY29wZSkge1xuXG5cbiAgICAgICAgJHNjb3BlLnRlc3QgPSBmdW5jdGlvbihsaSkge1xuICAgICAgICAgIGxpLmJvb2wgPSAhbGkuYm9vbDtcbiAgICAgICAgICBjb25zb2xlLmxvZyhsaSk7XG4gICAgICAgIH1cbiAgICAgICAgJHNjb3BlLmRlbGV0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLnNob3c9ZmFsc2U7XG4gICAgICAgICAgaWYoZGF0YS5ub2Rlcykge1xuICAgICAgICAgIGRhdGEubm9kZXMgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgJHNjb3BlLmNyZWF0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBpZighZGF0YS5ub2Rlcykge1xuICAgICAgICAgICAgZGF0YS5ub2Rlcz1bXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YS5ub2Rlcy5wdXNoKCAge1xuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBuYW1lOidub2RlMTEnLFxuICAgICAgICAgICAgICBib29sOnRydWUsXG4gICAgICAgICAgICAgIHR5cGU6J2ZvbGRlcidcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfVxuICB9KTtcblxufVxuKSgpO1xuIiwiYW5ndWxhci5tb2R1bGUoJ0FQUCcpXG4uZGlyZWN0aXZlKCduYXZ0cmVlJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGFycmF5OiAnPSdcbiAgICB9LFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbW1vbi9jb21wb25lbnRzL25hdnRyZWUvbmF2dHJlZS5odG1sJyxcbiAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLnRlc3QgPWZ1bmN0aW9uKGFycikge1xuICAgICAgYXJyLmwyID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTonZm91cidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6J2ZpdmUnXG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgICAgIGNvbnNvbGUubG9nKGFycik7XG4gICAgfVxuICB9XG59XG59KTtcbiJdfQ==
