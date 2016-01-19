System.register(['angular2/core', '../services/marker-manager'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, marker_manager_1;
    var markerId, SebmGoogleMapMarker;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (marker_manager_1_1) {
                marker_manager_1 = marker_manager_1_1;
            }],
        execute: function() {
            markerId = 0;
            SebmGoogleMapMarker = (function () {
                function SebmGoogleMapMarker(_markerManager) {
                    this._markerManager = _markerManager;
                    this.markerClick = new core_1.EventEmitter();
                    this._markerAddedToManger = false;
                    this._id = (markerId++).toString();
                }
                SebmGoogleMapMarker.prototype.ngOnChanges = function (changes) {
                    var _this = this;
                    if (!this._markerAddedToManger && this.latitude && this.longitude) {
                        this._markerManager.addMarker(this);
                        this._markerAddedToManger = true;
                        this._markerManager.createClickObserable(this)
                            .subscribe(function () { _this.markerClick.next(null); });
                        return;
                    }
                    if (changes['latitude'] || changes['logitude']) {
                        this._markerManager.updateMarkerPosition(this);
                    }
                    if (changes['title']) {
                        this._markerManager.updateTitle(this);
                    }
                    if (changes['label']) {
                        this._markerManager.updateLabel(this);
                    }
                };
                SebmGoogleMapMarker.prototype.id = function () { return this._id; };
                SebmGoogleMapMarker.prototype.toString = function () { return 'SebmGoogleMapMarker-' + this._id.toString(); };
                SebmGoogleMapMarker.prototype.ngOnDestroy = function () { this._markerManager.deleteMarker(this); };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], SebmGoogleMapMarker.prototype, "latitude", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], SebmGoogleMapMarker.prototype, "longitude", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], SebmGoogleMapMarker.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], SebmGoogleMapMarker.prototype, "label", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SebmGoogleMapMarker.prototype, "markerClick", void 0);
                SebmGoogleMapMarker = __decorate([
                    core_1.Directive({ selector: 'sebm-google-map-marker' }), 
                    __metadata('design:paramtypes', [marker_manager_1.MarkerManager])
                ], SebmGoogleMapMarker);
                return SebmGoogleMapMarker;
            })();
            exports_1("SebmGoogleMapMarker", SebmGoogleMapMarker);
        }
    }
});
//# sourceMappingURL=google-map-marker.js.map