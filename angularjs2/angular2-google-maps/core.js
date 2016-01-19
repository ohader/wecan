System.register(['angular2/core', './services/maps-api-loader/maps-api-loader', './services/maps-api-loader/lazy-maps-api-loader', './directives', './services'], function(exports_1) {
    var core_1, maps_api_loader_1, lazy_maps_api_loader_1;
    var ANGULAR2_GOOGLE_MAPS_PROVIDERS;
    var exportedNames_1 = {
        'ANGULAR2_GOOGLE_MAPS_PROVIDERS': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (maps_api_loader_1_1) {
                maps_api_loader_1 = maps_api_loader_1_1;
            },
            function (lazy_maps_api_loader_1_1) {
                lazy_maps_api_loader_1 = lazy_maps_api_loader_1_1;
            },
            function (directives_1_1) {
                exportStar_1(directives_1_1);
            },
            function (services_1_1) {
                exportStar_1(services_1_1);
            }],
        execute: function() {
            exports_1("ANGULAR2_GOOGLE_MAPS_PROVIDERS", ANGULAR2_GOOGLE_MAPS_PROVIDERS = [
                new core_1.Provider(maps_api_loader_1.MapsAPILoader, { useClass: lazy_maps_api_loader_1.LazyMapsAPILoader }),
            ]);
        }
    }
});
//# sourceMappingURL=core.js.map