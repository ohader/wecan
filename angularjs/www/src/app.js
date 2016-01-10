angular.module('wecan', ['bootstrap', 'ngRoute', 'uiGmapgoogle-maps', 'communication'])
.config(
['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
    })
    .when('/map', {
        templateUrl: 'partials/map.html',
        controller: 'mapCtrl'
    })
    .when('/communication', {
        templateUrl: 'partials/communication.html',
        controller: 'communicationCtrl'
    })
    .when('/elements', {
        templateUrl: 'partials/elements.html',
        controller: 'elementsCtrl'
    })
    .otherwise({
        redirectTo: '/home'
    });
}])
.controller('indexCtrl', function($scope) {

})
.controller('homeCtrl', function($scope) {

})
.controller('mapCtrl', ['$scope', 'uiGmapGoogleMapApi', function($scope) {
    var destroyControlWatch, $container;

    angular.extend($scope, {
        map: {
            control: {},
            center: { latitude: 50.32497, longitude: 11.94023 },
            zoom: 14
        },
        markers: [
            {
                id: 'Hof.University',
                title: 'Hof University',
                latitude: 50.32497,
                longitude: 11.94023
            },
            {
                id: 'Hof.Theresienstein',
                title: 'Theresienstein City Park',
                latitude: 50.3276403,
                longitude: 11.9200896
            }
        ]
    });

    // Define callback to act if map control has been initialized
    // by angular-google-maps directive and watch the maps rendering
    // DIV that was been created automatically
    destroyControlWatch = $scope.$watch('map.control', function() {
        destroyControlWatch();

        // Redefine map center if rendering DIV gets resized
        $container = angular.element($scope.map.control.getGMap().getDiv());
        $scope.$watch(createDimensionCallback($container), fitToBounds);
    });

    /**
     * Helper function to watch render DIV changes in size
     * @param {angular.element|jQuery|DOMElement} element
     * @return {function}
     */
    function createDimensionCallback(element) {
        return function() {
            return element.width() + 'x' + element.height();
        };
    }

    /**
     * Fits to bounds
     */
    function fitToBounds() {
        var $map = $scope.map.control.getGMap();
        var bounds = calculateBounds();
        if ($scope.markers.length > 1) {
            $map.fitBounds(bounds);
        } else {
            $map.setCenter(bounds.getCenter());
        }
    }

    /**
     * Calculates the marker bounds
     * @return {google.maps.LatLngBounds}
     */
    function calculateBounds() {
        var bounds = new google.maps.LatLngBounds();
        $scope.markers.forEach(function(marker) {
            bounds.extend(
                new google.maps.LatLng(marker.latitude, marker.longitude)
            );
        });
        return bounds;
    }
}])
.controller('communicationCtrl', function($scope) {

})
.controller('elementsCtrl', function($scope) {
    $scope.email = 'your.name@';
});