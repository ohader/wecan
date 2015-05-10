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

### Google Maps

### Communication Widgets

