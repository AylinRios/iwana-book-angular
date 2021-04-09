import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddComponent } from './accounts/add/add.component';
import { ViewComponent } from './accounts/view/view.component';
import { DeleteComponent } from './accounts/delete/delete.component';


@NgModule({
  declarations: [
    AddComponent,
    ViewComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
