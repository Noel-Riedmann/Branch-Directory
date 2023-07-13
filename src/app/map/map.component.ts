import { Component } from '@angular/core';
import { Company } from '../company-list/models';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  center: google.maps.LatLngLiteral = { lat: 47.34892767158731, lng: 9.888965735153159}; // Center position of the map
  zoom = 10; // Zoom level of the map
  markerPositions: google.maps.LatLngLiteral[] = [];
  options: google.maps.MapOptions = {
    disableDoubleClickZoom: true,
    minZoom: 2.8,
    //reference https://timdeschryver.dev/blog/google-maps-as-an-angular-component#googlemap
  };


  constructor(private companyService: CompanyService) {
    this.markerPositions = this.companyService.getCompanies().map(company => {
      return { lat: company.lat, lng: company.lng };
    });
  }
}
