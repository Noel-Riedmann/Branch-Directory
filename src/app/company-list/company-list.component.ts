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
    { id: 1, sortiment: 'o', firma: 'Manor AG', plz: '8001', ort: 'Zürich', kanton: 'ZH', email: 'meier@manorag.ch', web: 'www.manorag.ch', phone: '+41 587 4568254', contact: 'meier paul', img: 'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/default_news_organisation_image_data/file/195/s960_Companies_House_Building.GOV_lighter.jpg'},
    { id: 2, sortiment: 'o', firma: 'Coop City', plz: '8001', ort: 'Zürich', kanton: 'ZH', email: 'candle@coop.ch', web: 'www.coopcity.ch', phone: '+41 567 4234423', contact: 'candle yankee', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/800px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg'},
    { id: 3, sortiment: 'o', firma: 'Blume3000', plz: '8021', ort: 'Zürich', kanton: 'ZH',email: 'aksoy@blume.ch', web: 'www.blume.at', phone: '+41 587 7256018', contact: 'aksoy zek', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/800px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg'}
  ];

  constructor(private router: Router, private companyService: CompanyService) {
    this.companyService.setCompanies(this.companies);
  }

  showDetails(company: Company) {
    this.companyService.setSelectedCompany(company);
    localStorage.setItem('selectedCompany', JSON.stringify(company));
    this.router.navigate(['filialen/details', company.id]);
  }
  

  
}
