angular.module('bootstrap', [])
.directive('bootstrapNavbar', function($compile, $http) {
	return {
		restrict: 'E',
		compile: function(tElement, tAttrs) {
			return {
				post: function(scope, iElement, iAttrs, controller) {
					$http.get(iAttrs.src).success(function(data) {
						iElement.html(data);
						$compile(iElement.contents())(scope);
					});
				}
			}
		},
		controller: function($scope, $compile, $http) {
			$scope.brand = '';
			$scope.items = [];
			$scope.link = function(target) {
				return (target ? '/' + target : '');
			};
		}
	};
})
.directive('bootstrapNavbarBrand', function() {
	return {
		restrict: 'E',
		require: '^bootstrapNavbar',
		link: function($scope, element, attrs, controller) {
			$scope.brand = attrs.name;
		}
	};
})
.directive('bootstrapNavbarItem', function() {
	return {
		restrict: 'E',
		require: '^bootstrapNavbar',
		compile: function(tElement, tAttrs) {
			return {
				pre: function(scope, iElement, iAttrs, controller) {
					scope.items.push({ name: iAttrs.name, target: iAttrs.target });
				}
			}
		}
	};
})
;