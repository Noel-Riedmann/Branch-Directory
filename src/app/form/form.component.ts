import { Component } from '@angular/core';
import { CompanyService } from '../company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData: any = {};

  constructor(private companyService: CompanyService,
    private route: ActivatedRoute, private router: Router,) { }

  onSubmit() {
    this.companyService.addCompany(this.formData);
    this.formData = {};
  }

  back() {
    this.router.navigate(['filialen']);
  }
}
