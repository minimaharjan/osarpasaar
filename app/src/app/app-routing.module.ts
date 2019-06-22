import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent} from './signup/signup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserHistoryComponent} from './user-history/user-history.component';
import { NearByVehicleComponent } from './near-by-vehicle/near-by-vehicle.component';
import { TripRegisterComponent } from './trip-register/trip-register.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'user-dashboard', component: UserDashboardComponent},
  {path: 'user-history', component: UserHistoryComponent},
  {path: 'nearbyvehicle', component: NearByVehicleComponent},
  {path: 'tripregister', component: TripRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
