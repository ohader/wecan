System.register(['angular2/core', 'angular2-google-maps/services/marker-manager', './custom-google-maps-api-wrapper'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, marker_manager_1, custom_google_maps_api_wrapper_1;
    var CustomMarkerManager;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (marker_manager_1_1) {
                marker_manager_1 = marker_manager_1_1;
            },
            function (custom_google_maps_api_wrapper_1_1) {
                custom_google_maps_api_wrapper_1 = custom_google_maps_api_wrapper_1_1;
            }],
        execute: function() {
            CustomMarkerManager = (function (_super) {
                __extends(CustomMarkerManager, _super);
                function CustomMarkerManager(_mapsWrapper) {
                    _super.call(this, _mapsWrapper);
                    this._mapsWrapper = _mapsWrapper;
                }
                CustomMarkerManager.prototype.getBounds = function () {
                    var _this = this;
                    return this._mapsWrapper.createLatLngBounds().then(function (latLngBounds) {
                        _this._markers.forEach(function (promise) {
                            promise.then(function (customMarker) {
                                latLngBounds.extend(customMarker.getPosition());
                            });
                        });
                        return latLngBounds;
                    });
                };
                CustomMarkerManager = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [custom_google_maps_api_wrapper_1.CustomGoogleMapsAPIWrapper])
                ], CustomMarkerManager);
                return CustomMarkerManager;
            })(marker_manager_1.MarkerManager);
            exports_1("CustomMarkerManager", CustomMarkerManager);
        }
    }
});
//# sourceMappingURL=custom-marker-manager.js.map