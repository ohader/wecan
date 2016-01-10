angular.module('communication', [])
.run(function($rootScope) {
    $rootScope.communication = {
        messages: [{
            content: 'Add new messages in the input field below...'
        }, {
            content: '... and watch the message count in the nav bar!'
        }]
    };
})
.directive('communicationMessageWidget', function($rootScope) {
    return {
        scope: {},
        restrict: 'E',
        templateUrl: function(element, attrs) {
            return attrs.src;
        },
        link: function($scope, element, attrs) {
            $scope.messages = $rootScope.communication.messages;
            $scope.content = '';
            $scope.send = function(content) {
                $scope.messages.push({ content: content });
                $scope.content = '';
            }
        }
    }
})
.directive('communicationMessageCount', function($compile, $templateCache) {
    var templateExtension = ' <span class="badge" ng-if="item.communicationMessageCount">{{$root.communication.messages.length}}</span>';

    return {
        scope: true,
        priority: 200,
        restrict: 'A',
        require: '^bootstrapNavbar',
        link: function($scope, tElement, tAttrs, controller) {
            var destroyNavBarWatch;

            function findElement() {
                return $scope.$navbar.find('*[data-item-index=' + $scope.index + ']');
            }

            $scope.items[$scope.index].communicationMessageCount = true;
            destroyNavBarWatch = $scope.$watch(function() { return $scope.$navbar.html(); }, function(oldValue, newValue, $s) {
                var iElement = findElement();

                if (oldValue === newValue || iElement.length === 0) {
                    return false;
                }

                destroyNavBarWatch();

                var rawTemplate = $templateCache.get($scope.$navbar.attr('src'));
                var domTemplate = angular.element(rawTemplate);
                var domTemplateItem = domTemplate.find('*[data-item-index="{{item.index}}"] > a');

                domTemplateItem.append(templateExtension);
                $scope.$navbar.html(domTemplate);
                $compile($scope.$navbar.contents())($scope);
            });
        }
    };
})
;