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
        redirectTo: 'characters-page',
        pathMatch: 'full',
      },
      {
        path: 'planets-page',
        loadComponent: () => import('./pages/planets-page/planets-page.page').then( m => m.PlanetsPagePage)
      },
      {
        path: 'characters-page',
        loadComponent: () => import('./pages/characters-page/characters-page.page').then( m => m.CharactersPagePage)
      },
      {
        path: 'search',
        loadComponent: () => import('./pages/search/search.page').then( m => m.SearchPage)
      },
    ]
  },
  {
    path: 'character-detail-page',
    loadComponent: () => import('./pages/character-detail-page/character-detail-page.page').then( m => m.CharacterDetailPagePage)
  },
  {
    path: 'planet-detail-page',
    loadComponent: () => import('./pages/planet-detail-page/planet-detail-page.page').then( m => m.PlanetDetailPagePage)
  },

];
