import { Injectable } from '@angular/core';
import { Company } from './company-list/models';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private selectedCompany: Company | undefined;
  private companies: Company[] = [];

  constructor() {}

  setCompanies(companies: Company[]): void {
    this.companies = companies;
  }

  getCompany(): Company[] {
    return this.companies;
  }

  setSelectedCompany(company: Company): void {
    this.selectedCompany = company;
  }

  getSelectedCompany(): Company | undefined {
    return this.selectedCompany;
  }
}
