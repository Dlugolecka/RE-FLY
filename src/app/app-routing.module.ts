import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { LogonComponent } from './views/logon/logon.component';
import { ErrorComponent } from './views/error/error.component';
import { SummaryComponent } from './views/summary/summary.component';
import { DetailsComponent } from './views/details/details.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'logon',
    component: LogonComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'summary',
    component: SummaryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '**',
    redirectTo: 'error',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
