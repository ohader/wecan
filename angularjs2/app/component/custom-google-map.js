System.register(['angular2/core', 'angular2-google-maps/directives/google-map', 'app/service/google-maps-state', 'app/service/custom-marker-manager', 'app/service/custom-google-maps-api-wrapper'], function(exports_1) {
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
    var core_1, google_map_1, google_maps_state_1, custom_marker_manager_1, custom_google_maps_api_wrapper_1;
    var CustomGoogleMapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (google_map_1_1) {
                google_map_1 = google_map_1_1;
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
            CustomGoogleMapComponent = (function (_super) {
                __extends(CustomGoogleMapComponent, _super);
                function CustomGoogleMapComponent(_componentElement, _mapsWrapper, _renderer, _mapsState) {
                    _super.call(this, _componentElement, _mapsWrapper, _renderer);
                    this._componentElement = _componentElement;
                    this._mapsWrapper = _mapsWrapper;
                    this._renderer = _renderer;
                    this._mapsState = _mapsState;
                }
                CustomGoogleMapComponent.prototype.ngOnChanges = function (changes) {
                    _super.prototype.ngOnChanges.call(this, changes);
                    if (changes['fitBounds']) {
                        this._mapsState.fitBounds = this.fitBounds;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], CustomGoogleMapComponent.prototype, "fitBounds", void 0);
                CustomGoogleMapComponent = __decorate([
                    core_1.Component({
                        selector: 'custom-google-map',
                        inputs: ['latitude', 'longitude', 'zoom'],
                        providers: [custom_marker_manager_1.CustomMarkerManager, custom_google_maps_api_wrapper_1.CustomGoogleMapsAPIWrapper, google_maps_state_1.GoogleMapsState],
                        // @todo Analyze how to reuse ComponentMeta information from an existing component
                        styles: [
                            "\n\t\t.sebm-google-map-container-inner {\n\t\t\twidth: inherit;\n\t\t\theight: inherit;\n\t\t}\n\t\t"
                        ],
                        template: "\n\t\t<div class=\"sebm-google-map-container-inner\"></div>\n\t\t<ng-content></ng-content>\n\t"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, (typeof (_a = typeof custom_google_maps_api_wrapper_1.CustomGoogleMapsAPIWrapper !== 'undefined' && custom_google_maps_api_wrapper_1.CustomGoogleMapsAPIWrapper) === 'function' && _a) || Object, core_1.Renderer, (typeof (_b = typeof google_maps_state_1.GoogleMapsState !== 'undefined' && google_maps_state_1.GoogleMapsState) === 'function' && _b) || Object])
                ], CustomGoogleMapComponent);
                return CustomGoogleMapComponent;
                var _a, _b;
            })(google_map_1.SebmGoogleMap);
            exports_1("CustomGoogleMapComponent", CustomGoogleMapComponent);
        }
    }
});
//# sourceMappingURL=custom-google-map.js.map