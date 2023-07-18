import { Router } from '@angular/router';
import { Branch } from './../full-stack-table/models';
import { BranchesService } from './../branches.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent {
  addBranchRequest: Branch = {
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
  }

  constructor(private BranchesService: BranchesService, private router: Router){}

  ngOnInit(): void{
  }

  addBranch() {
    this.BranchesService.addBranch(this.addBranchRequest).subscribe({
      next: (branch) => {
        this.router.navigate(['/filialen/fullstacktable/branches']);
      }
    });
  }

}
