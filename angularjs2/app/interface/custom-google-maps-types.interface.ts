import {GoogleMap, Marker, LatLng, LatLngLiteral} from 'angular2-google-maps/services/google-maps-types';

export interface CustomGoogleMap extends GoogleMap {
	fitBounds(bounds: LatLngBounds): void;
}

export interface CustomMarker extends Marker {
	getPosition(): LatLng;
}

export interface LatLngBounds {
	sw?: LatLng | LatLngLiteral;
	ne?: LatLng | LatLngLiteral;

	extend(point: LatLng): LatLngBounds;
	getCenter(): LatLng;
}
