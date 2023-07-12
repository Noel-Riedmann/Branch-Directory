import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../company-list/models';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  companyId: number | undefined;
  company: Company | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private companyService: CompanyService) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.companyId = +idParam;
      this.company = this.companyService.getSelectedCompany();
    } else {
      console.log('Branch not available');
      alert('Branch not available');
    }
  }

  goBack() {
    this.router.navigate(['/filialen']);
  }
}
