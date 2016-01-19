System.register(['angular2/platform/browser', 'app/app.wecan', 'angular2/router'], function(exports_1) {
    var browser_1, app_wecan_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_wecan_1_1) {
                app_wecan_1 = app_wecan_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_wecan_1.AppWecan, [router_1.ROUTER_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=boot.js.map