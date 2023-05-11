import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';

import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './components/login/login.component';


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
  ],

  imports: [
    CoreRoutingModule,
    SharedModule,
    NgxChartsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      })
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
