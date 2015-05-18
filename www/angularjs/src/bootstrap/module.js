angular.module('bootstrap', [])
.directive('bootstrapNavbar', function($compile, $http, $templateCache) {
	return {
		restrict: 'E',
        priority: 100,
		compile: function(tElement, tAttrs) {
			return {
				pre: function(scope, tElement, tAttrs, controller) {
                    scope.$navbar = tElement;
				},
				post: function(scope, iElement, iAttrs, controller) {
					$http.get(iAttrs.src).success(function(data) {
                        $templateCache.put(iAttrs.src, data);
						iElement.html(data);
						$compile(iElement.contents())(scope);
					});
				}
			}
		},
		controller: function($scope, $compile, $http) {
			$scope.brand = '[undefined]';
			$scope.items = [];
			$scope.link = function(target) {
				return '#/' + target;
			};
		}
	};
})
.directive('bootstrapNavbarBrand', function() {
	return {
		restrict: 'E',
        priority: 100,
		require: '^bootstrapNavbar',
		link: function($scope, element, attrs, controller) {
			$scope.brand = attrs.name || $scope.brand;
		}
	};
})
.directive('bootstrapNavbarItem', function() {
	return {
        scope: true,
		restrict: 'E',
        priority: 100,
		require: '^bootstrapNavbar',
        // Using compile.pre() instead of link() to keep the defined order
        compile: function(tElement, tAttrs) {
            return {
                pre: function(scope, iElement, iAttrs, controller) {
                    scope.index = scope.items.length;
                    scope.items.push({ name: iAttrs.name, target: iAttrs.target, index: scope.index });
                }
            }
        }
	};
})
;