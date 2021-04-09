import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from './accounts/add/add.component';
import {ViewComponent} from './accounts/view/view.component';
import {DeleteComponent} from './accounts/delete/delete.component';

const routes: Routes = [{  path: '',
  children: [
    {path: 'add', component: AddComponent},
    {path: 'delete', component: DeleteComponent},
    {path: 'view', component: ViewComponent},
    {path: '**', redirectTo: 'view'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
