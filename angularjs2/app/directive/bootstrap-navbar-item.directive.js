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
    var BootstrapNavbarItemDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bootstrap_navbar_service_1_1) {
                bootstrap_navbar_service_1 = bootstrap_navbar_service_1_1;
            }],
        execute: function() {
            BootstrapNavbarItemDirective = (function () {
                function BootstrapNavbarItemDirective(_navbarService, _element) {
                    this._navbarService = _navbarService;
                    this._element = _element;
                }
                BootstrapNavbarItemDirective.prototype.ngOnInit = function () {
                    this.routerLink = [this.target];
                    this._navbarService.items.push(this);
                };
                BootstrapNavbarItemDirective = __decorate([
                    core_1.Directive({
                        selector: 'bootstrap-navbar-item',
                        inputs: ['name', 'target']
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof bootstrap_navbar_service_1.BootstrapNavbarService !== 'undefined' && bootstrap_navbar_service_1.BootstrapNavbarService) === 'function' && _a) || Object, core_1.ElementRef])
                ], BootstrapNavbarItemDirective);
                return BootstrapNavbarItemDirective;
                var _a;
            })();
            exports_1("BootstrapNavbarItemDirective", BootstrapNavbarItemDirective);
        }
    }
});
//# sourceMappingURL=bootstrap-navbar-item.directive.js.map