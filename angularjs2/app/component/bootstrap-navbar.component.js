System.register(['angular2/core', 'angular2/router', 'app/service/bootstrap-navbar.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, bootstrap_navbar_service_1;
    var BootstrapNavbarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (bootstrap_navbar_service_1_1) {
                bootstrap_navbar_service_1 = bootstrap_navbar_service_1_1;
            }],
        execute: function() {
            BootstrapNavbarComponent = (function () {
                function BootstrapNavbarComponent(_navbarService) {
                    this._navbarService = _navbarService;
                }
                BootstrapNavbarComponent.prototype.ngOnInit = function () {
                };
                BootstrapNavbarComponent = __decorate([
                    core_1.Component({
                        selector: 'bootstrap-navbar',
                        templateUrl: 'app/component/bootstrap-navbar.html',
                        // Create one instance of the BootstrapNavbarService
                        // which is shared as kind of a singleton for *-brand and *-item
                        providers: [bootstrap_navbar_service_1.BootstrapNavbarService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof bootstrap_navbar_service_1.BootstrapNavbarService !== 'undefined' && bootstrap_navbar_service_1.BootstrapNavbarService) === 'function' && _a) || Object])
                ], BootstrapNavbarComponent);
                return BootstrapNavbarComponent;
                var _a;
            })();
            exports_1("BootstrapNavbarComponent", BootstrapNavbarComponent);
        }
    }
});
//# sourceMappingURL=bootstrap-navbar.component.js.map