import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { FormComponent } from './form/form.component';
import { MaterialtableComponent } from './materialtable/materialtable.component';
import { MapComponent } from './map/map.component';
import { FullStackTableComponent } from './full-stack-table/full-stack-table.component';
import { BranchesListComponent } from './branches-list/branches-list.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { EditBranchComponent } from './edit-branch/edit-branch.component';
import { FullStackTableMapComponent } from './full-stack-table-map/full-stack-table-map.component';

const routes: Routes = [
  { path: 'filialen', component: CompanyListComponent },
  { path: '', redirectTo: '/filialen/materialtable', pathMatch: 'full' },
  { path: 'filialen/details/:id', component: DetailsComponent },
  { path: 'filialen/add', component: FormComponent },
  { path: 'filialen/edit/:id', component: FormComponent },
  { path: 'filialen/materialtable', component: MaterialtableComponent },
  { path: 'filialen/map', component: MapComponent },
  {
    path: 'filialen/fullstacktable',
    component: FullStackTableComponent,
    children: [
      { path: '', redirectTo: 'branches', pathMatch: 'full' },
      { path: 'branches', component: BranchesListComponent },
      { path: 'add', component: AddBranchComponent },
      { path: 'edit/:id', component: EditBranchComponent},
      {path: 'map', component: FullStackTableMapComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
