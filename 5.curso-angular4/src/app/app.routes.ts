import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HomeComponent } from './components/home/home.component';


const APP_ROUTES: Routes = [
    { path: 'usuario', component: UsuarioComponent },
    { path: 'home', component: HomeComponent },
    { path: 'pelicula', component: PeliculaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
