import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';




@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent
  ],
  exports: [
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AppSharedModule { }
