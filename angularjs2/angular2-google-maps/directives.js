System.register(['./directives/google-map', './directives/google-map-marker', './directives-const'], function(exports_1) {
    return {
        setters:[
            function (google_map_1_1) {
                exports_1({
                    "SebmGoogleMap": google_map_1_1["SebmGoogleMap"],
                    "MapMouseEvent": google_map_1_1["MapMouseEvent"]
                });
            },
            function (google_map_marker_1_1) {
                exports_1({
                    "SebmGoogleMapMarker": google_map_marker_1_1["SebmGoogleMapMarker"]
                });
            },
            function (directives_const_1_1) {
                exports_1({
                    "ANGULAR2_GOOGLE_MAPS_DIRECTIVES": directives_const_1_1["ANGULAR2_GOOGLE_MAPS_DIRECTIVES"]
                });
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=directives.js.map