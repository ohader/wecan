angular.module('wecan', ['bootstrap', 'ngRoute'])
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
    .otherwise({
        redirectTo: '/home'
    });
}])
.controller('indexCtrl', function($scope) {

})
.controller('homeCtrl', function($scope) {

})
.controller('mapCtrl', function($scope) {

})
.controller('communicationCtrl', function($scope) {

});