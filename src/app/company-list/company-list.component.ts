import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from './models';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent {
  companies: Company[] = [
    { id: 1, sortiment: 'o', firma: 'Manor AG', plz: '8001', ort: 'Zürich', kanton: 'ZH' },
    { id: 2, sortiment: 'o', firma: 'Coop City', plz: '8001', ort: 'Zürich', kanton: 'ZH' },
    { id: 3, sortiment: 'o', firma: 'Blume3000', plz: '8021', ort: 'Zürich', kanton: 'ZH' }
  ];

  constructor(private router: Router, private companyService: CompanyService) {
    this.companyService.setCompanies(this.companies);
  }

  showDetails(company: Company) {
    this.companyService.setSelectedCompany(company);
    this.router.navigate(['filialen/details', company.id]);
  }
}
