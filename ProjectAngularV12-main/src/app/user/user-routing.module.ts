import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddFormComponent} from "./add-form/add-form.component";
import {ShowAllComponent} from "./show-all/show-all.component";
import {ShowOneComponent} from "./show-one/show-one.component";

const routes: Routes = [
  {path:'show-all-user', component: ShowAllComponent},
  {path:'show-user', component: ShowOneComponent},
  {path:'add-user', component: AddFormComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
