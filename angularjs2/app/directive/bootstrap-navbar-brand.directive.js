System.register(['angular2/core', 'app/service/bootstrap-navbar.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, bootstrap_navbar_service_1;
    var BootstrapNavbarBrandDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bootstrap_navbar_service_1_1) {
                bootstrap_navbar_service_1 = bootstrap_navbar_service_1_1;
            }],
        execute: function() {
            BootstrapNavbarBrandDirective = (function () {
                function BootstrapNavbarBrandDirective(_navbarService) {
                    this._navbarService = _navbarService;
                }
                BootstrapNavbarBrandDirective.prototype.ngOnInit = function () {
                    this._navbarService.brand = this;
                };
                BootstrapNavbarBrandDirective = __decorate([
                    core_1.Directive({
                        selector: 'bootstrap-navbar-brand',
                        inputs: ['name']
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof bootstrap_navbar_service_1.BootstrapNavbarService !== 'undefined' && bootstrap_navbar_service_1.BootstrapNavbarService) === 'function' && _a) || Object])
                ], BootstrapNavbarBrandDirective);
                return BootstrapNavbarBrandDirective;
                var _a;
            })();
            exports_1("BootstrapNavbarBrandDirective", BootstrapNavbarBrandDirective);
        }
    }
});
//# sourceMappingURL=bootstrap-navbar-brand.directive.js.map