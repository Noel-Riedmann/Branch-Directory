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

  deleteCompany(company: Company){
    this.companyService.deleteCompany(company.id);
  }
}
