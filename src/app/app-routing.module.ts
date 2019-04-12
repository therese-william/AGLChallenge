import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewcatlistComponent} from './views/viewcatlist/viewcatlist.component';

const routes: Routes = [{path: 'viewcatlist', component: ViewcatlistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
