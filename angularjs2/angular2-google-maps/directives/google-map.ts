import {
  Component,
  Input,
  Output,
  Renderer,
  ElementRef,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChange
} from 'angular2/core';
import {GoogleMapsAPIWrapper} from '../services/google-maps-api-wrapper';
import {MarkerManager} from '../services/marker-manager';
import {LatLng, LatLngLiteral} from '../services/google-maps-types';

/**
 * Todo: add docs
 */
@Component({
  selector: 'sebm-google-map',
  providers: [GoogleMapsAPIWrapper, MarkerManager],
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
export class SebmGoogleMap implements OnInit, OnChanges {
  protected _longitude: number = 0;
  protected _latitude: number = 0;
  protected _zoom: number = 8;
  @Input() disableDoubleClickZoom: boolean = false;

  protected static _mapOptionsAttributes: string[] = ['disableDoubleClickZoom'];

  @Output() mapClick: EventEmitter<MapMouseEvent> = new EventEmitter<MapMouseEvent>();
  @Output() mapRightClick: EventEmitter<MapMouseEvent> = new EventEmitter<MapMouseEvent>();
  @Output() mapDblClick: EventEmitter<MapMouseEvent> = new EventEmitter<MapMouseEvent>();

  constructor(
      protected _componentElement: ElementRef,
      protected _mapsWrapper: GoogleMapsAPIWrapper,
      protected _renderer: Renderer
  ) {
  }

  ngOnInit() {
    this._renderer.setElementClass(this._componentElement.nativeElement, 'sebm-google-map-container', true);
    const container = this._componentElement.nativeElement.querySelector('.sebm-google-map-container-inner');
    this._initMapInstance(container);
  }

  protected _initMapInstance(el: HTMLElement) {
    this._mapsWrapper.createMap(el, {center: {lat: this._latitude, lng: this._longitude}});
    this._handleMapCenterChange();
    this._handleMapZoomChange();
    this._handleMapMouseEvents();
  }

  protected static _containsMapOptionsChange(changesKeys: string[]): boolean {
    return changesKeys.every(
        (key: string) => { return SebmGoogleMap._mapOptionsAttributes.indexOf(key) !== 1; });
  }

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    if (SebmGoogleMap._containsMapOptionsChange(Object.keys(changes))) {
      this._setMapOptions();
    }
  }

  _setMapOptions() {
    this._mapsWrapper.setMapOptions({disableDoubleClickZoom: this.disableDoubleClickZoom});
  }

  @Input()
  set zoom(value: number | string) {
    this._zoom = this._convertToDecimal(value);
    if (typeof this._zoom === 'number') {
      this._mapsWrapper.setZoom(this._zoom);
    }
  }

  @Input()
  set longitude(value: number | string) {
    this._longitude = this._convertToDecimal(value);
    this._updateCenter();
  }

  @Input()
  set latitude(value: number | string) {
    this._latitude = this._convertToDecimal(value);
    this._updateCenter();
  }

  protected _convertToDecimal(value: string | number): number {
    if (typeof value === 'string') {
      return parseFloat(value);
    } else if (typeof value === 'number') {
      return <number>value;
    }
    return null;
  }

  protected _updateCenter() {
    if (typeof this._latitude !== 'number' || typeof this._longitude !== 'number') {
      return;
    }
    this._mapsWrapper.setCenter({
      lat: this._latitude,
      lng: this._longitude,
    });
  }

  protected _handleMapCenterChange() {
    this._mapsWrapper.subscribeToMapEvent<void>('center_changed').subscribe(() => {
      this._mapsWrapper.getCenter().then((center: LatLng) => {
        this._latitude = center.lat();
        this._longitude = center.lng();
      });
    });
  }

  protected _handleMapZoomChange() {
    this._mapsWrapper.subscribeToMapEvent<void>('zoom_changed')
        .subscribe(() => { this._mapsWrapper.getZoom().then((z: number) => this._zoom = z); });
  }

  protected _handleMapMouseEvents() {
    interface Emitter {
      emit(value: any): void;
    }
    type Event = {name: string, emitter: Emitter};

    const events: Event[] = [
      {name: 'click', emitter: this.mapClick},
      {name: 'rightclick', emitter: this.mapRightClick},
      {name: 'dblclick', emitter: this.mapDblClick}
    ];

    events.forEach((e: Event) => {
      this._mapsWrapper.subscribeToMapEvent<{latLng: LatLng}>(e.name)
          .subscribe((event: {latLng: LatLng}) => {
            const value =
                <MapMouseEvent>{coords: {lat: event.latLng.lat(), lng: event.latLng.lng()}};
            e.emitter.emit(value);
          });
    });
  }
}

/**
 * MapMouseEvent gets emitted when the user triggers mouse events on the map.
 */
export interface MapMouseEvent { coords: LatLngLiteral; }
