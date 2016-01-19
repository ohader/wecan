import {Injectable} from 'angular2/core';

import {MarkerManager} from 'angular2-google-maps/services/marker-manager';

import {CustomGoogleMapMarkerDirective} from 'app/directive/custom-google-map-marker';
import {CustomGoogleMapsAPIWrapper} from './custom-google-maps-api-wrapper';

import * as superMapTypes from 'angular2-google-maps/services/google-maps-types';
import * as customMapTypes from 'app/interface/custom-google-maps-types.interface';

@Injectable()
export class CustomMarkerManager extends MarkerManager {
	constructor(protected _mapsWrapper: CustomGoogleMapsAPIWrapper) {
		super(_mapsWrapper);
	}

	getBounds(): Promise<customMapTypes.LatLngBounds> {
		return this._mapsWrapper.createLatLngBounds().then(
			(latLngBounds: customMapTypes.LatLngBounds) => {
				this._markers.forEach(
					(promise: Promise<customMapTypes.CustomMarker>) => {
						promise.then(
							(customMarker: customMapTypes.CustomMarker) => {
								latLngBounds.extend(customMarker.getPosition());
							}
						)
					}
				);
				return latLngBounds;
			}
		);
	}
}