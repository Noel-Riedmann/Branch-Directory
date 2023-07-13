import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'branch-directory';

  constructor(private route: ActivatedRoute, private router: Router, private companyService: CompanyService) {}

  goToFilialen(){
    this.router.navigate(['/filialen']);
  }

  gotwosic(){
    window.open('https://www.2sic.com');
    console.log('logo has been pressed')
  }

  mattable(){
    this.router.navigate(['filialen/materialtable'])
  }
}
