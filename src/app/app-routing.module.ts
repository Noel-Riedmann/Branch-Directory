import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { CompanyListComponent } from './company-list/company-list.component';

const routes: Routes = [
  { path: 'filialen', component: CompanyListComponent},
  { path: '', redirectTo: '/filialen', pathMatch: 'full' },
  { path: 'filialen/details/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
