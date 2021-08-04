import { HomeCapitulosComponent } from './components/home-capitulos/home-capitulos.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePersonajesComponent } from './components/home-personajes/home-personajes.component';
import { CapituloComponent } from './components/capitulo/capitulo.component';
import { PersonajeComponent } from './components/personaje/personaje.component';




const APP_ROUTES: Routes =[

  {path: 'home-capitulos', component: HomeCapitulosComponent},
  {path: 'home-personajes', component: HomePersonajesComponent},
  {path: 'capitulo/:url', component: CapituloComponent},
  {path: 'personaje/:url', component: PersonajeComponent},

  {path: '**', pathMatch:'full', redirectTo:'home-personajes'}
];

export const APP_RUTING= RouterModule.forRoot(APP_ROUTES);
