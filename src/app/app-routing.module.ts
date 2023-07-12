import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { FormComponent } from './form/form.component';
import { EditCompanyComponent } from './edit-company-component/edit-company-component.component';

const routes: Routes = [
  { path: 'filialen', component: CompanyListComponent},
  { path: '', redirectTo: '/filialen', pathMatch: 'full' },
  { path: 'filialen/details/:id', component: DetailsComponent },
  { path: 'filialen/add', component: FormComponent },
  { path: 'filialen/edit/:id', component: EditCompanyComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
