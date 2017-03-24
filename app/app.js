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

.controller('IndexCtrl', ['$scope', function ($scope) {
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
