import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BannerComponent} from './components/banner/banner.component';
import { LoginComponent} from './components/login/login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
  path: '',
  children: [
    { path: 'acercade', component: AcercaDeComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: 'educacion', component: EducacionComponent},
    { path: 'experiencia', component: ExperienciaComponent},
    { path: 'home', component: HomeComponent},
    { path: 'proyectos', component: ProyectosComponent},
    { path: 'skills', component: SkillsComponent},
    { path: 'banner', component: BannerComponent},
    { path: 'login', component: LoginComponent},



  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
