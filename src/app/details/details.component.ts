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
  lat: number = 47.307;
  lng: number = 9.69;

  constructor(private route: ActivatedRoute, private router: Router, private companyService: CompanyService) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.companyId = +idParam;
      const selectedCompany = localStorage.getItem('selectedCompany');
      if (selectedCompany) {
        this.company = JSON.parse(selectedCompany);
      } else {
        this.company = this.companyService.getSelectedCompany();
      }
      if (this.company) {
        this.markerPositions = [{ lat: this.company.lat, lng: this.company.lng }];
      }
    } else {
      console.log('Branch not available');
      alert('Branch not available');
    }
  }

  goBack() {
    this.router.navigate(['/filialen/materialtable']);
  }

  center: google.maps.LatLngLiteral = { lat: 47.34892767158731, lng: 9.888965735153159 }; // Center position of the map
  zoom = 10; // Zoom level of the map
  markerPositions: google.maps.LatLngLiteral[] = [{ lat: this.lat, lng: this.lng }];
  options: google.maps.MapOptions = {
    disableDoubleClickZoom: true,
    minZoom: 2.8,
    //reference https://timdeschryver.dev/blog/google-maps-as-an-angular-component#googlemap
  };

}



