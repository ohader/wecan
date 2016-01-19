import {Injectable, NgZone} from 'angular2/core';

import {MapsAPILoader} from 'angular2-google-maps/services/maps-api-loader/maps-api-loader';

import {GoogleMapsAPIWrapper} from 'angular2-google-maps/services/google-maps-api-wrapper';

import * as superMapTypes from 'angular2-google-maps/services/google-maps-types';
import * as customMapTypes from 'app/interface/custom-google-maps-types.interfaces';

declare var google: any;

@Injectable()
export class CustomGoogleMapsAPIWrapper extends GoogleMapsAPIWrapper {
	constructor(protected _loader: MapsAPILoader, protected _zone: NgZone) {
		super(_loader, _zone);
	}

	createLatLngBounds(): Promise<customMapTypes.LatLngBounds> {
		return this._map.then(
			(map: superMapTypes.GoogleMap) => { return new google.maps.LatLngBounds(); }
		);
	}

	fitBounds(latLngBounds:customMapTypes.LatLngBounds): Promise<void> {
		return this._map.then((map:customMapTypes.CustomGoogleMap) => map.fitBounds(latLngBounds));
	}
}