import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppUserRoutingModule} from "./app-user/app-user-routing.module";
import {AppProductRoutingModule} from "./app-product/app-product-routing.module";
import {NotFoundComponent} from "./app-shared/not-found/not-found.component";
import {UserRoutingModule} from "./user/user-routing.module";

const routes: Routes = [
  {path: '',redirectTo:'user', pathMatch: 'full' },
  {path: '**',component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AppUserRoutingModule,
    AppProductRoutingModule,
    UserRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
