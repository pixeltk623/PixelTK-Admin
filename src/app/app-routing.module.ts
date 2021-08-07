import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddInquiryComponent } from './add-inquiry/add-inquiry.component';
import { ManageInquiryComponent } from './manage-inquiry/manage-inquiry.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add-inquiry', component: AddInquiryComponent },
  { path: 'manage-inquiry', component: ManageInquiryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
