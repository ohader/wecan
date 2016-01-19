System.register(['angular2/core', 'rxjs/Observable', './google-maps-api-wrapper'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1, google_maps_api_wrapper_1;
    var MarkerManager;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (google_maps_api_wrapper_1_1) {
                google_maps_api_wrapper_1 = google_maps_api_wrapper_1_1;
            }],
        execute: function() {
            MarkerManager = (function () {
                function MarkerManager(_mapsWrapper) {
                    this._mapsWrapper = _mapsWrapper;
                    this._markers = new Map();
                }
                MarkerManager.prototype.deleteMarker = function (marker) {
                    var promise = this._markers.get(marker).then(function (m) { return m.setMap(null); });
                    this._markers.delete(marker);
                    return promise;
                };
                MarkerManager.prototype.updateMarkerPosition = function (marker) {
                    return this._markers.get(marker)
                        .then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
                };
                MarkerManager.prototype.updateTitle = function (marker) {
                    return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
                };
                MarkerManager.prototype.updateLabel = function (marker) {
                    return this._markers.get(marker).then(function (m) {
                        var label = m.getLabel();
                        label.text = marker.label;
                        m.setLabel(label);
                    });
                };
                MarkerManager.prototype.addMarker = function (marker) {
                    var markerPromise = this._mapsWrapper.createMarker({ position: { lat: marker.latitude, lng: marker.longitude }, label: marker.label });
                    this._markers.set(marker, markerPromise);
                };
                MarkerManager.prototype.createClickObserable = function (marker) {
                    var _this = this;
                    return Observable_1.Observable.create(function (observer) {
                        _this._markers.get(marker)
                            .then(function (m) { m.addListener('click', function () { observer.next(null); }); });
                    });
                };
                MarkerManager = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [google_maps_api_wrapper_1.GoogleMapsAPIWrapper])
                ], MarkerManager);
                return MarkerManager;
            })();
            exports_1("MarkerManager", MarkerManager);
        }
    }
});
//# sourceMappingURL=marker-manager.js.map