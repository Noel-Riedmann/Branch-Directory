import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formData: any = {};

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const companyId = +params['id'];
      if (companyId) {
        const company = this.companyService.getCompanyById(companyId);
        if (company) {
          this.formData = { ...company };
        }
      }
    });
  }

  onSubmit() {
    if (this.formData) {
      if (this.formData.id) {
        this.companyService.updateCompany(this.formData);
      } else {
        this.companyService.addCompany(this.formData);
      }
      this.formData = {};
    }
  }

  back() {
    this.router.navigate(['filialen']);
  }
}
