import {Directive, SimpleChange, Input, Output} from 'angular2/core';

import {SebmGoogleMapMarker} from 'angular2-google-maps/directives/google-map-marker';

import {GoogleMapsState} from 'app/service/google-maps-state';
import {CustomMarkerManager} from 'app/service/custom-marker-manager';
import {CustomGoogleMapsAPIWrapper} from 'app/service/custom-google-maps-api-wrapper';

import * as customMapTypes from 'app/interface/custom-google-maps-types.interface';

@Directive({
	selector: 'custom-google-map-marker',
	inputs: ['latitude', 'longitude', 'title', 'label']
})

export class CustomGoogleMapMarkerDirective extends SebmGoogleMapMarker {
	constructor(
		protected _markerManager: CustomMarkerManager,
		protected _mapsWrapper: CustomGoogleMapsAPIWrapper,
		protected _mapsState: GoogleMapsState
	) {
		super(_markerManager);
	}

	ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
		super.ngOnChanges(changes);

		if ((changes['latitude'] || changes['logitude']) && this._mapsState.fitBounds) {
			this._markerManager.getBounds().then(
				(latLngBounds: customMapTypes.LatLngBounds) => {this._mapsWrapper.fitBounds(latLngBounds); }
			);
		}
	}
}