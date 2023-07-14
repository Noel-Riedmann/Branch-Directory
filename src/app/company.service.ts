import { Injectable } from '@angular/core';
import { Company } from './company-list/models';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private selectedCompany: Company | undefined;
  private companies: Company[] = [];
  private storageKey = 'companies';
  private currentId: number = 100;

  constructor() {
    this.loadCompaniesFromStorage();
    this.loadCurrentIdFromStorage();
  }

  private generateUniqueId(): number {
    this.currentId++;
    this.saveCurrentIdToStorage();
    return this.currentId;
  }

  setCompanies(companies: Company[]): void {
    this.companies = companies;
    this.saveCompaniesToStorage();
  }

  getCompanies(): Company[] {
    return this.companies;
  }

  addCompany(company: Company): void {
    const newId = this.generateUniqueId();
    company.id = newId;
    this.companies.push(company);
    this.saveCompaniesToStorage();
  }

  private saveCompaniesToStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.companies));
  }

  private loadCompaniesFromStorage(): void {
    const storedCompanies = localStorage.getItem(this.storageKey);
    if (storedCompanies) {
      this.companies = JSON.parse(storedCompanies);
    }
  }

  private loadCurrentIdFromStorage(): void {
    const storedId = localStorage.getItem('currentId');
    this.currentId = storedId ? parseInt(storedId, 10) : 0;
  }

  private saveCurrentIdToStorage(): void {
    localStorage.setItem('currentId', this.currentId.toString());
  }

  getCompanyById(id: number): Company | undefined {
    return this.companies.find(company => company.id === id);
  }

  updateCompany(updatedCompany: Company): void {
    const index = this.companies.findIndex(company => company.id === updatedCompany.id);
    if (index !== -1) {
      this.companies[index] = updatedCompany;
    }
  }
  deleteCompany(companyId: number): void {
    const index = this.companies.findIndex(company => company.id === companyId);
    if (index !== -1) {
      this.companies.splice(index, 1);
      this.saveCompaniesToStorage();
    }
  }
}

