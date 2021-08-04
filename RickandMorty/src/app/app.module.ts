import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Externas
import {NgxPaginationModule} from 'ngx-pagination';


//rutas
import { AppRoutingModule } from './app-routing.module';
import { APP_RUTING } from './app-routes';


//Componentes
import { AppComponent } from './app.component';
import { HomePersonajesComponent } from './components/home-personajes/home-personajes.component';
import { HomeCapitulosComponent } from './components/home-capitulos/home-capitulos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CapituloComponent } from './components/capitulo/capitulo.component';


//Services
import { ConsultasService } from './services/consultas.service';
import { PersonajeComponent } from './components/personaje/personaje.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePersonajesComponent,
    HomeCapitulosComponent,
    NavbarComponent,
    CapituloComponent,
    PersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_RUTING,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [
    ConsultasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
