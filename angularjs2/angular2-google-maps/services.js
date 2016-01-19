System.register(['./services/maps-api-loader/maps-api-loader', './services/maps-api-loader/noop-maps-api-loader', './services/maps-api-loader/lazy-maps-api-loader'], function(exports_1) {
    return {
        setters:[
            function (maps_api_loader_1_1) {
                exports_1({
                    "MapsAPILoader": maps_api_loader_1_1["MapsAPILoader"]
                });
            },
            function (noop_maps_api_loader_1_1) {
                exports_1({
                    "NoOpMapsAPILoader": noop_maps_api_loader_1_1["NoOpMapsAPILoader"]
                });
            },
            function (lazy_maps_api_loader_1_1) {
                exports_1({
                    "LazyMapsAPILoader": lazy_maps_api_loader_1_1["LazyMapsAPILoader"],
                    "LazyMapsAPILoaderConfig": lazy_maps_api_loader_1_1["LazyMapsAPILoaderConfig"],
                    "GoogleMapsScriptProtocol": lazy_maps_api_loader_1_1["GoogleMapsScriptProtocol"]
                });
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=services.js.map