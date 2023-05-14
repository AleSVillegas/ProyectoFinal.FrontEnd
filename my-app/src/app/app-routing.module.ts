import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { NewExperienciaComponent } from './core/components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './core/components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './core/components/educacion/new-educacion.component';
import { EditEducacionComponent } from './core/components/educacion/edit-educacion.component';
import { NewSkillComponent } from './core/components/skills/new-skill.component';
import { EditSkillComponent } from './core/components/skills/edit-skill.component';
import { EditAcercaDeComponent } from './core/components/acerca-de/edit-acerca-de.component';


const routes: Routes = [
{ path:'',loadChildren:() => import('./core/core.module').then (m => m.CoreModule)},
{ path:'', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent }, // Ruta para la página de inicio
/*{ path: '**', redirectTo: 'home', pathMatch: 'full' },*/
/*{ path: '', component: HomeComponent},*/   
{ path: 'login', component: LoginComponent },
{ path: 'nuevaexp', component: NewExperienciaComponent },
{ path: 'editexp/:id', component: EditExperienciaComponent },
{ path: 'nuevaedu', component: NewEducacionComponent },
{ path: 'editedu/:id', component: EditEducacionComponent },
{ path: 'newskill', component: NewSkillComponent},
{ path: 'editskill/:id', component: EditSkillComponent},
{ path: 'editacercaDe/:id', component:EditAcercaDeComponent },
//{ path: 'editskill/:id', component: EditSkillComponent},
    
  //{path:'admin',loadChildren:() => import('./modules/admin/admin.module').then (m => m.AdminModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
