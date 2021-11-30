import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserComponent } from './form-user/form-user.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppUserRoutingModule } from './app-user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { MainUserComponent } from './main-user/main-user.component';
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    FormUserComponent,
    LoginComponent,
    UserListComponent,
    MainUserComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    AppUserRoutingModule,
  ]
})
export class AppUserModule { }
