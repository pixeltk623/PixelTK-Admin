import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddInquiryComponent } from './add-inquiry/add-inquiry.component';
import { ManageInquiryComponent } from './manage-inquiry/manage-inquiry.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddInquiryComponent,
    ManageInquiryComponent,
    HeaderComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
