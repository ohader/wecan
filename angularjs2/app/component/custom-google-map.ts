import {Component, Input, ElementRef, Renderer, SimpleChange} from 'angular2/core';

import {SebmGoogleMap} from 'angular2-google-maps/directives/google-map';

import {GoogleMapsState} from 'app/service/google-maps-state';
import {CustomMarkerManager} from 'app/service/custom-marker-manager';
import {CustomGoogleMapsAPIWrapper} from 'app/service/custom-google-maps-api-wrapper';

@Component({
	selector: 'custom-google-map',
	inputs: ['latitude', 'longitude', 'zoom'],
	providers: [CustomMarkerManager, CustomGoogleMapsAPIWrapper, GoogleMapsState],
	// @todo Analyze how to reuse ComponentMeta information from an existing component
	styles: [
		`
		.sebm-google-map-container-inner {
			width: inherit;
			height: inherit;
		}
		`
	],
	template: `
		<div class="sebm-google-map-container-inner"></div>
		<ng-content></ng-content>
	`
})

export class CustomGoogleMapComponent extends SebmGoogleMap {
	@Input() fitBounds: Boolean;

	constructor(
		protected _componentElement: ElementRef,
		protected _mapsWrapper: CustomGoogleMapsAPIWrapper,
		protected _renderer: Renderer,
		protected _mapsState: GoogleMapsState
	) {
		super(_componentElement, _mapsWrapper, _renderer);
	}

	ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
		super.ngOnChanges(changes);

		if (changes['fitBounds']) {
			this._mapsState.fitBounds = this.fitBounds;
		}
	}
}