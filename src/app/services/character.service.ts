import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterInterface } from '../common/character.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private readonly http:HttpClient = inject(HttpClient);

  constructor() {}

  getCharacters(): Observable<CharacterInterface> {
    return this.http.get<CharacterInterface>(environment.urlBase + "characters")
  }
}
