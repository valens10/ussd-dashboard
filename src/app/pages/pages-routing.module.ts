import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './guard/auth.service';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { BranchSetupComponent } from './branch-setup/branch-setup.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'ums' },
  {
    path: 'sacco',
    component: DashboardComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'users', component: UsersComponent, canActivateChild: [AuthService] },
      { path: 'clients', component: ClientListComponent },
      { path: 'branch', component: BranchSetupComponent },
      { path: 'clients/:client_id', component: ClientDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
