System.register(['angular2/core', '../services/google-maps-api-wrapper', '../services/marker-manager'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, google_maps_api_wrapper_1, marker_manager_1;
    var SebmGoogleMap;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (google_maps_api_wrapper_1_1) {
                google_maps_api_wrapper_1 = google_maps_api_wrapper_1_1;
            },
            function (marker_manager_1_1) {
                marker_manager_1 = marker_manager_1_1;
            }],
        execute: function() {
            /**
             * Todo: add docs
             */
            SebmGoogleMap = (function () {
                function SebmGoogleMap(_componentElement, _mapsWrapper, _renderer) {
                    this._componentElement = _componentElement;
                    this._mapsWrapper = _mapsWrapper;
                    this._renderer = _renderer;
                    this._longitude = 0;
                    this._latitude = 0;
                    this._zoom = 8;
                    this.disableDoubleClickZoom = false;
                    this.mapClick = new core_1.EventEmitter();
                    this.mapRightClick = new core_1.EventEmitter();
                    this.mapDblClick = new core_1.EventEmitter();
                }
                SebmGoogleMap.prototype.ngOnInit = function () {
                    this._renderer.setElementClass(this._componentElement.nativeElement, 'sebm-google-map-container', true);
                    var container = this._componentElement.nativeElement.querySelector('.sebm-google-map-container-inner');
                    this._initMapInstance(container);
                };
                SebmGoogleMap.prototype._initMapInstance = function (el) {
                    this._mapsWrapper.createMap(el, { center: { lat: this._latitude, lng: this._longitude } });
                    this._handleMapCenterChange();
                    this._handleMapZoomChange();
                    this._handleMapMouseEvents();
                };
                SebmGoogleMap._containsMapOptionsChange = function (changesKeys) {
                    return changesKeys.every(function (key) { return SebmGoogleMap._mapOptionsAttributes.indexOf(key) !== 1; });
                };
                SebmGoogleMap.prototype.ngOnChanges = function (changes) {
                    if (SebmGoogleMap._containsMapOptionsChange(Object.keys(changes))) {
                        this._setMapOptions();
                    }
                };
                SebmGoogleMap.prototype._setMapOptions = function () {
                    this._mapsWrapper.setMapOptions({ disableDoubleClickZoom: this.disableDoubleClickZoom });
                };
                Object.defineProperty(SebmGoogleMap.prototype, "zoom", {
                    set: function (value) {
                        this._zoom = this._convertToDecimal(value);
                        if (typeof this._zoom === 'number') {
                            this._mapsWrapper.setZoom(this._zoom);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SebmGoogleMap.prototype, "longitude", {
                    set: function (value) {
                        this._longitude = this._convertToDecimal(value);
                        this._updateCenter();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SebmGoogleMap.prototype, "latitude", {
                    set: function (value) {
                        this._latitude = this._convertToDecimal(value);
                        this._updateCenter();
                    },
                    enumerable: true,
                    configurable: true
                });
                SebmGoogleMap.prototype._convertToDecimal = function (value) {
                    if (typeof value === 'string') {
                        return parseFloat(value);
                    }
                    else if (typeof value === 'number') {
                        return value;
                    }
                    return null;
                };
                SebmGoogleMap.prototype._updateCenter = function () {
                    if (typeof this._latitude !== 'number' || typeof this._longitude !== 'number') {
                        return;
                    }
                    this._mapsWrapper.setCenter({
                        lat: this._latitude,
                        lng: this._longitude,
                    });
                };
                SebmGoogleMap.prototype._handleMapCenterChange = function () {
                    var _this = this;
                    this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
                        _this._mapsWrapper.getCenter().then(function (center) {
                            _this._latitude = center.lat();
                            _this._longitude = center.lng();
                        });
                    });
                };
                SebmGoogleMap.prototype._handleMapZoomChange = function () {
                    var _this = this;
                    this._mapsWrapper.subscribeToMapEvent('zoom_changed')
                        .subscribe(function () { _this._mapsWrapper.getZoom().then(function (z) { return _this._zoom = z; }); });
                };
                SebmGoogleMap.prototype._handleMapMouseEvents = function () {
                    var _this = this;
                    var events = [
                        { name: 'click', emitter: this.mapClick },
                        { name: 'rightclick', emitter: this.mapRightClick },
                        { name: 'dblclick', emitter: this.mapDblClick }
                    ];
                    events.forEach(function (e) {
                        _this._mapsWrapper.subscribeToMapEvent(e.name)
                            .subscribe(function (event) {
                            var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
                            e.emitter.emit(value);
                        });
                    });
                };
                SebmGoogleMap._mapOptionsAttributes = ['disableDoubleClickZoom'];
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], SebmGoogleMap.prototype, "disableDoubleClickZoom", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SebmGoogleMap.prototype, "mapClick", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SebmGoogleMap.prototype, "mapRightClick", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SebmGoogleMap.prototype, "mapDblClick", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], SebmGoogleMap.prototype, "zoom", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], SebmGoogleMap.prototype, "longitude", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], SebmGoogleMap.prototype, "latitude", null);
                SebmGoogleMap = __decorate([
                    core_1.Component({
                        selector: 'sebm-google-map',
                        providers: [google_maps_api_wrapper_1.GoogleMapsAPIWrapper, marker_manager_1.MarkerManager],
                        styles: [
                            "\n    .sebm-google-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n  "
                        ],
                        template: "\n    <div class=\"sebm-google-map-container-inner\"></div>\n    <ng-content></ng-content>\n  "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, google_maps_api_wrapper_1.GoogleMapsAPIWrapper, core_1.Renderer])
                ], SebmGoogleMap);
                return SebmGoogleMap;
            })();
            exports_1("SebmGoogleMap", SebmGoogleMap);
        }
    }
});
//# sourceMappingURL=google-map.js.map