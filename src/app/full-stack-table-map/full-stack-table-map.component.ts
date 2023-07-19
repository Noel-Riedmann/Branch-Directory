import { Component } from '@angular/core';
import { Branch } from '../full-stack-table/models';
import { BranchesService } from '../branches.service';

@Component({
  selector: 'app-full-stack-table-map',
  templateUrl: './full-stack-table-map.component.html',
  styleUrls: ['./full-stack-table-map.component.css']
})
export class FullStackTableMapComponent {
  markerPositions: { lat: number, lng: number }[] = [];

  constructor(private branchesService: BranchesService) { }

  center: google.maps.LatLngLiteral = { lat:47.05005929124998, lng: 8.295404096695936}; // Center position of the map
  zoom = 7.9; // Zoom level of the map
  options: google.maps.MapOptions = {
    minZoom: 2.8,
    //reference https://timdeschryver.dev/blog/google-maps-as-an-angular-component#googlemap
  };

  ngOnInit(): void {
    this.branchesService.getAllBranches().subscribe({
      next: (branches) => {
        this.markerPositions = branches.map(branch => ({
          lat: branch.lat,
          lng: branch.lng
        }));
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}
