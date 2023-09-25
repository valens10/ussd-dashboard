import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { NgbAccordionModule, NgbDropdownModule, NgbModalModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { HttpClientModule } from '@angular/common/http';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { BranchSetupComponent } from './branch-setup/branch-setup.component';


@NgModule({
  declarations: [
    SideNavComponent,
    DashboardComponent,
    UsersComponent,
    HomeComponent,
    ClientListComponent,
    ClientDetailsComponent,
    BranchSetupComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    NgbNavModule,
    NgbModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbAccordionModule,
    NgOtpInputModule,
    HttpClientModule

  ]
})
export class PagesModule { }
