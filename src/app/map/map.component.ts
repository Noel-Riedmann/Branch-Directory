import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  center: google.maps.LatLngLiteral = { lat: 47.17457215392857, lng: 9.469121910305136}; // Center position of the map
  zoom = 10.5;

  markerPositions: google.maps.LatLngLiteral[] = [
    { lat: 47.17457215392857, lng: 9.469121910305136},
    { lat: 47.4181, lng:9.6718}
  ];
  }
