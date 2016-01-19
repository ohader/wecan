import {Component} from 'angular2/core';

import {CustomGoogleMapsAPIWrapper} from 'app/service/custom-google-maps-api-wrapper';

import {CustomGoogleMapComponent} from './custom-google-map';
import {CustomGoogleMapMarkerDirective} from 'app/directive/custom-google-map-marker';
import {CustomMarkerManager} from 'app/service/custom-marker-manager';

import {
  MapsAPILoader,
  NoOpMapsAPILoader,
  MapMouseEvent,
  ANGULAR2_GOOGLE_MAPS_PROVIDERS,
  ANGULAR2_GOOGLE_MAPS_DIRECTIVES
} from 'angular2-google-maps/core';

@Component({
	selector: 'wecan-map',
	templateUrl: 'app/component/wecan-map.html',
	directives: [CustomGoogleMapComponent, CustomGoogleMapMarkerDirective],
	providers: [ANGULAR2_GOOGLE_MAPS_PROVIDERS]
})

export class WecanMapComponent {
	public map: Object = {
		zoom: 14,
		control: {},
		fitBounds: true,
		center: { latitude: 50.32497, longitude: 11.94023 }
	};

	public markers: Object[] = [
		{
			id: 'Hof.University',
			title: 'Hof University',
			latitude: 50.32497,
			longitude: 11.94023
		},
		{
			id: 'Hof.Theresienstein',
			title: 'Theresienstein City Park',
			latitude: 50.3276403,
			longitude: 11.9200896
		}
	];

	clickedMarker(label: string) {
		console.log(label);
	}

	mapClicked($event: MapMouseEvent) {
		//console.log($event.coords.lat, $event.coords.lng);
	}
}