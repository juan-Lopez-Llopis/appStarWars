import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanetInterface } from '../common/planet.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private readonly http:HttpClient = inject(HttpClient);

  constructor(){}

  getPlanets(): Observable<PlanetInterface> {
    return this.http.get<PlanetInterface>(environment.urlBase + "planets")
  }
  
}
