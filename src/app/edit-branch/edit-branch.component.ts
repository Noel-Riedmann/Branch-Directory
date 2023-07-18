import { BranchesService } from './../branches.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from '../full-stack-table/models';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.css']
})
export class EditBranchComponent {
  constructor(private route: ActivatedRoute, private branchesService: BranchesService, private router: Router) { }

  branchDetails: Branch = {
    id: '',
    assortment: '',
    branche: '',
    zip: '',
    city: '',
    canton: '',
    email: '',
    phone: '',
    web: '',
    contact: '',
    img: '',
    lat: 0,
    lng: 0,
  };

  ngOnInit() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.branchesService.getBranch(id).subscribe({
            next: (response) => {
              this.branchDetails = response;
            }
          });
        }
      }
    });
  }

  updateBranch(){
    this.branchesService.updateBranch(this.branchDetails.id, this.branchDetails).subscribe({
      next: (response) => {
        this.router.navigate(['/filialen/fullstacktable/branches']);
      }
    })
  }
}
