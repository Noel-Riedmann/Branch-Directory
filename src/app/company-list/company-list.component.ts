import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from './models';
import { CompanyService } from '../company.service';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  language: string = '';

  constructor(
    private router: Router,
    private companyService: CompanyService,
    private translate: TranslateService,
    private appComponent: AppComponent
  ) {
    this.language = this.appComponent.getLanguage();
    this.translate.setDefaultLang(this.language);
    this.translate.use(this.language);
  }

  ngOnInit() {
    this.companies = this.companyService.getCompanies();
  }

  deleteCompany(company: Company) {
    this.companyService.deleteCompany(company.id);
  }
}
