System.register(['angular2/core', './custom-google-map', 'app/directive/custom-google-map-marker', 'angular2-google-maps/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, custom_google_map_1, custom_google_map_marker_1, core_2;
    var WecanMapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (custom_google_map_1_1) {
                custom_google_map_1 = custom_google_map_1_1;
            },
            function (custom_google_map_marker_1_1) {
                custom_google_map_marker_1 = custom_google_map_marker_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            WecanMapComponent = (function () {
                function WecanMapComponent() {
                    this.map = {
                        zoom: 14,
                        control: {},
                        fitBounds: true,
                        center: { latitude: 50.32497, longitude: 11.94023 }
                    };
                    this.markers = [
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
                    ];
                }
                WecanMapComponent.prototype.clickedMarker = function (label) {
                    console.log(label);
                };
                WecanMapComponent.prototype.mapClicked = function ($event) {
                    //console.log($event.coords.lat, $event.coords.lng);
                };
                WecanMapComponent = __decorate([
                    core_1.Component({
                        selector: 'wecan-map',
                        templateUrl: 'app/component/wecan-map.html',
                        directives: [custom_google_map_1.CustomGoogleMapComponent, custom_google_map_marker_1.CustomGoogleMapMarkerDirective],
                        providers: [core_2.ANGULAR2_GOOGLE_MAPS_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WecanMapComponent);
                return WecanMapComponent;
            })();
            exports_1("WecanMapComponent", WecanMapComponent);
        }
    }
});
//# sourceMappingURL=wecan-map.component.js.map