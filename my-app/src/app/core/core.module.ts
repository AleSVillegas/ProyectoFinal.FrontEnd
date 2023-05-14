import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'

import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';



@NgModule({
  declarations: [
    AcercaDeComponent,
    ExperienciaComponent,
    ProyectosComponent,
    EducacionComponent,
    SkillsComponent,
    ContactoComponent,
    HomeComponent,
    BannerComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercaDeComponent,
        
  ],

  imports: [
    CoreRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    NgbModule,
    NgCircleProgressModule.forRoot({
      }),
    TooltipModule.forRoot(),
    
  ],

  
  exports:[
    AcercaDeComponent,
    ExperienciaComponent,
    ProyectosComponent,
    EducacionComponent,
    SkillsComponent,
    ContactoComponent,
    HomeComponent,
    
  ]
})
export class CoreModule { }
