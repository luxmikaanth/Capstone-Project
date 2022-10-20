import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './index/home.component';
import { ApplyadharcardComponent } from './applyadharcard/applyadharcard.component';
import { DuplicateComponent } from './duplicate/duplicate.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdharCardDetailsComponent } from './adhar-card-details/adhar-card-details.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { DuplicateListComponent } from './duplicate-list/duplicate-list.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';


const routes: Routes = [
  {path:'signup', component:SignUpComponent},
  {path:'login', component:LoginComponent},
  {path: 'home', component:HomeComponent},
  {path: 'apply', component:ApplyadharcardComponent},
  {path: 'duplicate', component:DuplicateComponent},
  {path: 'adminlogin', component:AdminLoginComponent},
  {path: 'adhardetails', component:AdharCardDetailsComponent},
  {path: 'userupdate', component:UserUpdateComponent},
  {path: 'duplicatelist', component:DuplicateListComponent},
  {path: 'userhome', component:UserHomeComponent},
  {path: 'adminhome', component:AdminhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
