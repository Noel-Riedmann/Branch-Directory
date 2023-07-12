import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../company-list/models';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company-component.component.html',
  styleUrls: ['./edit-company-component.component.css']
})
export class EditCompanyComponent implements OnInit {
  company: Company | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyService: CompanyService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const companyId = +params['id'];
      this.company = this.companyService.getCompanyById(companyId);
    });
  }

  onSubmit() {
    if (this.company) {
      this.companyService.updateCompany(this.company);
      this.router.navigate(['filialen']);
    }
  }

  back(){
    this.router.navigate(['filialen']);
  }
}






