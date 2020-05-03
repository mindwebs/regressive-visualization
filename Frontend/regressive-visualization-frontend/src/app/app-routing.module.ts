import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInputComponentComponent } from './user-input-component/user-input-component.component';
import { ChartComponentComponent } from './chart-component/chart-component.component';


const routes: Routes = [
  { path: 'home', component: UserInputComponentComponent },
  { path: 'chart', component: ChartComponentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
