import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../company-list/models';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  companyId: number | undefined;
  company: Company | undefined;
  markerPosition: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
  lat: number = 47.307;
  lng: number = 9.69;

  constructor(private route: ActivatedRoute, private router: Router, private companyService: CompanyService) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.companyId = +idParam;
      this.company = this.companyService.getCompanyById(this.companyId);
      if (this.company) {
        this.markerPosition = { lat: this.company.lat, lng: this.company.lng };
      }
    } else {
      console.log('Branch not available');
      alert('Branch not available');
    }
  }

  center: google.maps.LatLngLiteral = { lat: 47.34892767158731, lng: 9.888965735153159 }; // Center position of the map
  zoom = 10; // Zoom level of the map
  options: google.maps.MapOptions = {
    disableDoubleClickZoom: true,
    minZoom: 2.8,
    //reference https://timdeschryver.dev/blog/google-maps-as-an-angular-component#googlemap
  };
}
