import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from './models';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
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

  addBranche() {
    this.router.navigate(['filialen/add']);
  }

  editCompany(company: Company) {
    this.companyService.setSelectedCompany(company);
    this.router.navigate(['filialen/edit', company.id]); 
    console.log("Company id:", company.id)
  }
  
  
}
