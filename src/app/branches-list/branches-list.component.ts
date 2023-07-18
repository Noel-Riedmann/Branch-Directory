import { Component, OnInit } from '@angular/core';
import { Branch } from '../full-stack-table/models';
import { BranchesService } from '../branches.service';

@Component({
  selector: 'app-branches-list',
  templateUrl: './branches-list.component.html',
  styleUrls: ['./branches-list.component.css']
})
export class BranchesListComponent implements OnInit {
  branches: Branch[] = [];

  constructor(private branchesService: BranchesService) { }

  ngOnInit(): void {
    this.branchesService.getAllBranches().subscribe({
      next: (branches) => {
        this.branches = branches;
        console.log(this.branches);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}
