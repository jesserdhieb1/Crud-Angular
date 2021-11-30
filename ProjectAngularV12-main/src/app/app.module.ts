import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppUserModule} from "./app-user/app-user.module";
import {AppProductModule} from "./app-product/app-product.module";
import {AppSharedModule} from "./app-shared/app-shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserModule} from "./user/user.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppUserModule,
    AppProductModule,
    AppSharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
