System.register([], function(exports_1) {
    var NoOpMapsAPILoader;
    return {
        setters:[],
        execute: function() {
            /**
             * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
             * Tag.
             * It's important that the Google Maps API script gets loaded first on the page.
             */
            NoOpMapsAPILoader = (function () {
                function NoOpMapsAPILoader() {
                }
                NoOpMapsAPILoader.prototype.load = function () {
                    if (!window.google || !window.google.maps) {
                        throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
                    }
                    return Promise.resolve();
                };
                ;
                return NoOpMapsAPILoader;
            })();
            exports_1("NoOpMapsAPILoader", NoOpMapsAPILoader);
        }
    }
});
//# sourceMappingURL=noop-maps-api-loader.js.map