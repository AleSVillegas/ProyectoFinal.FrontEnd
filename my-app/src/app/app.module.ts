import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { HomeModule } from "./modules/home/home.module";
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { interceptorProvider } from './service/interceptor-service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],

  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
