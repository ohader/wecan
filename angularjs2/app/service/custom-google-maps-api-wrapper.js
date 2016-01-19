System.register(['angular2/core', 'angular2-google-maps/services/maps-api-loader/maps-api-loader', 'angular2-google-maps/services/google-maps-api-wrapper'], function(exports_1) {
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
    var core_1, maps_api_loader_1, google_maps_api_wrapper_1;
    var CustomGoogleMapsAPIWrapper;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (maps_api_loader_1_1) {
                maps_api_loader_1 = maps_api_loader_1_1;
            },
            function (google_maps_api_wrapper_1_1) {
                google_maps_api_wrapper_1 = google_maps_api_wrapper_1_1;
            }],
        execute: function() {
            CustomGoogleMapsAPIWrapper = (function (_super) {
                __extends(CustomGoogleMapsAPIWrapper, _super);
                function CustomGoogleMapsAPIWrapper(_loader, _zone) {
                    _super.call(this, _loader, _zone);
                    this._loader = _loader;
                    this._zone = _zone;
                }
                CustomGoogleMapsAPIWrapper.prototype.createLatLngBounds = function () {
                    return this._map.then(function (map) { return new google.maps.LatLngBounds(); });
                };
                CustomGoogleMapsAPIWrapper.prototype.fitBounds = function (latLngBounds) {
                    return this._map.then(function (map) { return map.fitBounds(latLngBounds); });
                };
                CustomGoogleMapsAPIWrapper = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof maps_api_loader_1.MapsAPILoader !== 'undefined' && maps_api_loader_1.MapsAPILoader) === 'function' && _a) || Object, core_1.NgZone])
                ], CustomGoogleMapsAPIWrapper);
                return CustomGoogleMapsAPIWrapper;
                var _a;
            })(google_maps_api_wrapper_1.GoogleMapsAPIWrapper);
            exports_1("CustomGoogleMapsAPIWrapper", CustomGoogleMapsAPIWrapper);
        }
    }
});
//# sourceMappingURL=custom-google-maps-api-wrapper.js.map