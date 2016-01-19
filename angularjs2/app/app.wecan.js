System.register(['angular2/core', 'angular2/router', 'app/component/bootstrap-navbar.component', 'app/directive/bootstrap-navbar-brand.directive', 'app/directive/bootstrap-navbar-item.directive', 'app/component/wecan-home.component', 'app/component/wecan-map.component', 'app/component/wecan-communication.component', 'app/component/wecan-elements.component', 'app/component/communication-message-count.component', 'app/service/communication-state.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, bootstrap_navbar_component_1, bootstrap_navbar_brand_directive_1, bootstrap_navbar_item_directive_1, wecan_home_component_1, wecan_map_component_1, wecan_communication_component_1, wecan_elements_component_1, communication_message_count_component_1, communication_state_service_1;
    var AppWecan;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (bootstrap_navbar_component_1_1) {
                bootstrap_navbar_component_1 = bootstrap_navbar_component_1_1;
            },
            function (bootstrap_navbar_brand_directive_1_1) {
                bootstrap_navbar_brand_directive_1 = bootstrap_navbar_brand_directive_1_1;
            },
            function (bootstrap_navbar_item_directive_1_1) {
                bootstrap_navbar_item_directive_1 = bootstrap_navbar_item_directive_1_1;
            },
            function (wecan_home_component_1_1) {
                wecan_home_component_1 = wecan_home_component_1_1;
            },
            function (wecan_map_component_1_1) {
                wecan_map_component_1 = wecan_map_component_1_1;
            },
            function (wecan_communication_component_1_1) {
                wecan_communication_component_1 = wecan_communication_component_1_1;
            },
            function (wecan_elements_component_1_1) {
                wecan_elements_component_1 = wecan_elements_component_1_1;
            },
            function (communication_message_count_component_1_1) {
                communication_message_count_component_1 = communication_message_count_component_1_1;
            },
            function (communication_state_service_1_1) {
                communication_state_service_1 = communication_state_service_1_1;
            }],
        execute: function() {
            AppWecan = (function () {
                function AppWecan() {
                }
                AppWecan = __decorate([
                    core_1.Component({
                        selector: 'wecan-app',
                        template: "\n\t\t<bootstrap-navbar current-tab=\"Home\" src=\"src/bootstrap/navbar.html\">\n\t\t\t<bootstrap-navbar-brand name=\"WeCan\"></bootstrap-navbar-brand>\n\t\t\t<bootstrap-navbar-item name=\"Home\" target=\"Home\"></bootstrap-navbar-item>\n\t\t\t<bootstrap-navbar-item name=\"Google Map\" target=\"Map\">\n\t\t\t\txxx\n\t\t\t</bootstrap-navbar-item>\n\t\t\t<bootstrap-navbar-item name=\"Communication\" target=\"Communication\">\n\t\t\t\t<communication-message-count></communication-message-count>\n\t\t\t</bootstrap-navbar-item>\n\t\t\t<bootstrap-navbar-item name=\"Elements\" target=\"Elements\"></bootstrap-navbar-item>\n\t\t</bootstrap-navbar>\n\n\t\t<router-outlet></router-outlet>\n\t",
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            bootstrap_navbar_component_1.BootstrapNavbarComponent,
                            bootstrap_navbar_brand_directive_1.BootstrapNavbarBrandDirective,
                            bootstrap_navbar_item_directive_1.BootstrapNavbarItemDirective,
                            communication_message_count_component_1.CommunicationMessageCountComponent
                        ],
                        providers: [
                            communication_state_service_1.CommunicationStateService
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/', redirectTo: ['Home'] },
                        { path: '/home', name: 'Home', component: wecan_home_component_1.WecanHomeComponent },
                        { path: '/map', name: 'Map', component: wecan_map_component_1.WecanMapComponent },
                        { path: '/communication', name: 'Communication', component: wecan_communication_component_1.WecanCommunicationComponent },
                        { path: '/elements', name: 'Elements', component: wecan_elements_component_1.WecanElementsComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppWecan);
                return AppWecan;
            })();
            exports_1("AppWecan", AppWecan);
        }
    }
});
//# sourceMappingURL=app.wecan.js.map