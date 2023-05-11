import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';

const routes: Routes = [
{ path:'',loadChildren:() => import('./core/core.module').then (m => m.CoreModule)},
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: '**', redirectTo: 'home', pathMatch: 'full' },
{ path: 'login', component: LoginComponent},

  //{path:'admin',loadChildren:() => import('./modules/admin/admin.module').then (m => m.AdminModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
