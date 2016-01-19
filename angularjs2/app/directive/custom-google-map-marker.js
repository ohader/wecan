System.register(['angular2/core', 'angular2-google-maps/directives/google-map-marker', 'app/service/google-maps-state', 'app/service/custom-marker-manager', 'app/service/custom-google-maps-api-wrapper'], function(exports_1) {
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
    var core_1, google_map_marker_1, google_maps_state_1, custom_marker_manager_1, custom_google_maps_api_wrapper_1;
    var CustomGoogleMapMarkerDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (google_map_marker_1_1) {
                google_map_marker_1 = google_map_marker_1_1;
            },
            function (google_maps_state_1_1) {
                google_maps_state_1 = google_maps_state_1_1;
            },
            function (custom_marker_manager_1_1) {
                custom_marker_manager_1 = custom_marker_manager_1_1;
            },
            function (custom_google_maps_api_wrapper_1_1) {
                custom_google_maps_api_wrapper_1 = custom_google_maps_api_wrapper_1_1;
            }],
        execute: function() {
            CustomGoogleMapMarkerDirective = (function (_super) {
                __extends(CustomGoogleMapMarkerDirective, _super);
                function CustomGoogleMapMarkerDirective(_markerManager, _mapsWrapper, _mapsState) {
                    _super.call(this, _markerManager);
                    this._markerManager = _markerManager;
                    this._mapsWrapper = _mapsWrapper;
                    this._mapsState = _mapsState;
                }
                CustomGoogleMapMarkerDirective.prototype.ngOnChanges = function (changes) {
                    var _this = this;
                    _super.prototype.ngOnChanges.call(this, changes);
                    if ((changes['latitude'] || changes['logitude']) && this._mapsState.fitBounds) {
                        this._markerManager.getBounds().then(function (latLngBounds) { _this._mapsWrapper.fitBounds(latLngBounds); });
                    }
                };
                CustomGoogleMapMarkerDirective = __decorate([
                    core_1.Directive({
                        selector: 'custom-google-map-marker',
                        inputs: ['latitude', 'longitude', 'title', 'label']
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof custom_marker_manager_1.CustomMarkerManager !== 'undefined' && custom_marker_manager_1.CustomMarkerManager) === 'function' && _a) || Object, (typeof (_b = typeof custom_google_maps_api_wrapper_1.CustomGoogleMapsAPIWrapper !== 'undefined' && custom_google_maps_api_wrapper_1.CustomGoogleMapsAPIWrapper) === 'function' && _b) || Object, (typeof (_c = typeof google_maps_state_1.GoogleMapsState !== 'undefined' && google_maps_state_1.GoogleMapsState) === 'function' && _c) || Object])
                ], CustomGoogleMapMarkerDirective);
                return CustomGoogleMapMarkerDirective;
                var _a, _b, _c;
            })(google_map_marker_1.SebmGoogleMapMarker);
            exports_1("CustomGoogleMapMarkerDirective", CustomGoogleMapMarkerDirective);
        }
    }
});
//# sourceMappingURL=custom-google-map-marker.js.map