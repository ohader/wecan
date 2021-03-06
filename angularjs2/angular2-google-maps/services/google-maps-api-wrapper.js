System.register(['angular2/core', 'rxjs/Observable', './maps-api-loader/maps-api-loader'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1, maps_api_loader_1;
    var GoogleMapsAPIWrapper;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (maps_api_loader_1_1) {
                maps_api_loader_1 = maps_api_loader_1_1;
            }],
        execute: function() {
            /**
             * Wrapper class that handles the communication with the Google Maps Javascript
             * API v3
             */
            GoogleMapsAPIWrapper = (function () {
                function GoogleMapsAPIWrapper(_loader, _zone) {
                    var _this = this;
                    this._loader = _loader;
                    this._zone = _zone;
                    this._map =
                        new Promise(function (resolve) { _this._mapResolver = resolve; });
                }
                GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
                    var _this = this;
                    return this._loader.load().then(function () {
                        var map = new google.maps.Map(el, mapOptions);
                        _this._mapResolver(map);
                        return;
                    });
                };
                GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
                    this._map.then(function (m) { m.setOptions(options); });
                };
                /**
                 * Creates a google map marker with the map context
                 */
                GoogleMapsAPIWrapper.prototype.createMarker = function (options) {
                    if (options === void 0) { options = {}; }
                    return this._map.then(function (map) {
                        options.map = map;
                        return new google.maps.Marker(options);
                    });
                };
                GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
                    var _this = this;
                    return Observable_1.Observable.create(function (observer) {
                        _this._map.then(function (m) {
                            m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
                        });
                    });
                };
                GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
                    return this._map.then(function (map) { return map.setCenter(latLng); });
                };
                GoogleMapsAPIWrapper.prototype.getZoom = function () {
                    return this._map.then(function (map) { return map.getZoom(); });
                };
                GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
                    return this._map.then(function (map) { return map.setZoom(zoom); });
                };
                GoogleMapsAPIWrapper.prototype.getCenter = function () {
                    return this._map.then(function (map) { return map.getCenter(); });
                };
                GoogleMapsAPIWrapper = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [maps_api_loader_1.MapsAPILoader, core_1.NgZone])
                ], GoogleMapsAPIWrapper);
                return GoogleMapsAPIWrapper;
            })();
            exports_1("GoogleMapsAPIWrapper", GoogleMapsAPIWrapper);
        }
    }
});
//# sourceMappingURL=google-maps-api-wrapper.js.map