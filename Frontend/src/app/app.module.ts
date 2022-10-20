import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    ApplyadharcardComponent,
    DuplicateComponent,
    AdminLoginComponent,
    AdharCardDetailsComponent,
    UserUpdateComponent,
    DuplicateListComponent,
    UserHomeComponent,
    AdminhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
