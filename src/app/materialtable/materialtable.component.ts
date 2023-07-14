import { Component, OnInit } from '@angular/core';
import { Company } from './models';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-materialtable',
  templateUrl: './materialtable.component.html',
  styleUrls: ['./materialtable.component.css'],
})
export class MaterialtableComponent implements OnInit {
  displayedColumns: string[] = ['sortiment', 'firma', 'plz', 'ort', 'kanton', 'details'];
  companies: Company[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.companies = this.companyService.getCompanies();
  }
}
