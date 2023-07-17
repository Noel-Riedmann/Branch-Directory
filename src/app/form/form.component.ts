import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      id: [''],
      assortment: ['', Validators.required],
      branche: ['', Validators.required],
      zip: ['', Validators.required],
      city: ['', Validators.required],
      canton: ['', Validators.required],
      email: ['', Validators.required],
      web: ['', Validators.required],
      phone: ['', Validators.required],
      contact: ['', Validators.required],
      img: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const companyId = +params['id'];
      if (companyId) {
        const company = this.companyService.getCompanyById(companyId);
        if (company) {
          this.form.patchValue(company);
        }
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formValue = this.form.value;
      if (formValue.id) {
        this.companyService.updateCompany(formValue);
      } else {
        this.companyService.addCompany(formValue);
      }
      this.form.reset();
      this.router.navigate(['filialen']);
    }
  }
}
