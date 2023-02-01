import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetListComponent } from './widget-list/widget-list.component';

const routes: Routes = [
  { path: '' , component: WidgetListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
