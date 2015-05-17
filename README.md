# WebComponents vs. AngularJS

This project is an experimental evaluation and comparison concerning the
functionality, demands and future possibilities of WebComponents (in combination
with Polymer) and AngularJS.

***This is just for demonstration purpose, not a framework!***

## Experiments

There are several experiments that almost shall be the same in terms of
markup, resulting DOM and behavior. The only difference is, that each
experiment is solved in two ways - the AngularJS way and the Web Components
way.

### Bootstrap Navigation Bar ```bootstrap-navbar```

The scope is to create an own custom element that has nested elements
that share one common parent scope.

#### AngularJS

```
<div ng-app="wecan" ng-controller="indexCtrl">
	<bootstrap-navbar current-tab="Home" src="src/bootstrap/navbar.html">
		<bootstrap-navbar-brand name="WeCan" />
		<bootstrap-navbar-item name="Home" target="home" />
		<bootstrap-navbar-item name="Google Map" target="map" />
		<bootstrap-navbar-item name="Communication" target="communication" />
	</bootstrap-navbar>
</div>
```

[source](www/angularjs/src/bootstrap/)

#### Polymer Web Components

```
	<bootstrap-navbar>
		<bootstrap-navbar-brand name="WeCan" />
		<bootstrap-navbar-item name="Home" target="home" />
		<bootstrap-navbar-item name="Google Map" target="map" />
		<bootstrap-navbar-item name="Communication" target="communication" />
	</bootstrap-navbar>
```

[source](www/webcomponents/src/bootstrap/)

### Routing

#### AngularJS

```
	<div ng-view></div>
```

[usage](www/angularjs/index.html)

```
	angular.module('wecan', [..., 'ngRoute', ...])
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
```

[configuration](www/angularjs/src/app.js)
[partials](www/angularjs/partials/)

#### (Polymer) Web Components

Actually the used ```app-route``` component does not require Polymer.

```
	<app-router>
		<app-route path="/home" import="partials/home.html" template></app-route>
		<app-route path="/map" import="partials/map.html" template></app-route>
		<app-route path="/communication" import="partials/communication.html" template></app-route>
		<app-route path="*" redirect="/home"></app-route>
	</app-router>
```

[usage](www/webcomponents/index.html)
[partials](www/webcomponents/partials/)

### Google Maps

### Communication Widgets

