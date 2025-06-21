import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { EntrepriseProfileComponent } from './components/profile/entprofile.component';
import { EntrepriseComponent } from './components/entreprise/entreprise.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddFundsComponent } from './components/addfunds/addfunds.component';
import {InvestComponent} from './components/investment/invest.component';
import {OpportunityComponent } from './components/opportunity/opportunity.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'entprofile', component: EntrepriseProfileComponent },
  { path: 'dash', component: DashboardComponent},
  { path: 'funds', component: AddFundsComponent},
  { path: 'invest', component: InvestComponent},
  { path: 'opp', component: OpportunityComponent },
  { path: 'entreprise', component: EntrepriseComponent }
];
