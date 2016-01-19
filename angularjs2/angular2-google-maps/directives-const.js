System.register(['./directives/google-map', './directives/google-map-marker'], function(exports_1) {
    var google_map_1, google_map_marker_1;
    var ANGULAR2_GOOGLE_MAPS_DIRECTIVES;
    return {
        setters:[
            function (google_map_1_1) {
                google_map_1 = google_map_1_1;
            },
            function (google_map_marker_1_1) {
                google_map_marker_1 = google_map_marker_1_1;
            }],
        execute: function() {
            exports_1("ANGULAR2_GOOGLE_MAPS_DIRECTIVES", ANGULAR2_GOOGLE_MAPS_DIRECTIVES = [google_map_1.SebmGoogleMap, google_map_marker_1.SebmGoogleMapMarker]);
        }
    }
});
//# sourceMappingURL=directives-const.js.map