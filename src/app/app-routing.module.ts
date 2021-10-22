import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { MenuOneComponent } from './menu-one/menu-one.component';
import { MenuTwoComponent } from './menu-two/menu-two.component';

const routes: Routes = [
  { path: '', component: ChartsComponent },
  { path: 'dashboard', component: ChartsComponent },
  { path: 'menu-1', component: MenuOneComponent },
  { path: 'menu-2', component: MenuTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
