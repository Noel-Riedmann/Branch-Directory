import { Component } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData: any = {};

  constructor(private companyService: CompanyService) {}

  onSubmit() {
    this.companyService.addCompany(this.formData);
    this.formData = {};
  }
}
