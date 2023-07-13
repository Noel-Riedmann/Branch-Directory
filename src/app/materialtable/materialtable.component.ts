import { Component, OnInit } from '@angular/core';
import { Company } from './models';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-materialtable',
  templateUrl: './materialtable.component.html',
  styleUrls: ['./materialtable.component.css'],
})
export class MaterialtableComponent implements OnInit {
  displayedColumns: string[] = ['sortiment', 'firma', 'plz', 'ort', 'kanton', 'details'];
  companies: Company[] = [];

  constructor(private router: Router, private companyService: CompanyService) {}

  ngOnInit() {
    this.companies = this.companyService.getCompanies();

  }

  showDetails(company: Company) {
    this.companyService.setSelectedCompany(company);
    localStorage.setItem('selectedCompany', JSON.stringify(company));
    this.router.navigate(['filialen/details', company.id]);
  }
}
