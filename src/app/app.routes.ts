import { Routes } from '@angular/router';

export const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
   {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage),
    children:[
      {
        path: '',
        redirectTo: 'character-detail-page',
        pathMatch: 'full',
      },
      {
        path: 'character-detail-page',
        loadComponent: () => import('./pages/character-detail-page/character-detail-page.page').then( m => m.CharacterDetailPagePage)
      },
      {
        path: 'planet-detail-page',
        loadComponent: () => import('./pages/planet-detail-page/planet-detail-page.page').then( m => m.PlanetDetailPagePage)
      },
      {
        path: 'search',
        loadComponent: () => import('./pages/search/search.page').then( m => m.SearchPage)
      },
    ]
  },
 
];
