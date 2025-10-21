import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonCard, IonCardTitle, IonImg, IonSearchbar, IonItem } from '@ionic/angular/standalone';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/common/character.interface';
import { ToastService } from 'src/app/services/toast.service';
import { PlanetService } from 'src/app/services/planet.service';
import { Planet } from 'src/app/common/planet.interface';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSearchbar, IonList, IonCard, IonCardTitle, IonImg, IonSearchbar, IonItem, RouterLink]
})
export class SearchPage implements OnInit {
  private readonly characterService: CharacterService = inject(CharacterService);
  private readonly planetService: PlanetService = inject(PlanetService)
  private readonly toastService: ToastService = inject(ToastService);
  characters: Character[] = [];
  planets: Planet[] = [];
  textoBuscar = '';

  constructor() { }

  ngOnInit() {
    this.loadCharacters();
    this.loadPlanets();
  }
  private loadCharacters() {
    this.characterService.getCharacters().subscribe(
      {
        next: value => {
          this.characters = value.data;
        },
        complete: () => {
          console.log('Personajes cargados')
        },
        error: err => {
          this.toastService.mostrarToast(err.message,'danger');
        }
      }
    )
  }
  private loadPlanets() {
    this.planetService.getPlanets().subscribe(
      {
        next: value => {
          this.planets = value.data;
        },
        complete: () => {
          console.log('Planetas cargados')
        },
        error: err => {
          this.toastService.mostrarToast(err.message,'danger');
        }
      }
    )
  }

  buscar(event: any) {
    const resp = event.detail.value.toLowerCase();
    this.textoBuscar = resp;
    console.log(event);

    if(resp != '') {
      this.characterService.getFilterCharacters(resp).subscribe(
        {
          next: value => {
            console.log(value);
            this.characters = value;
          },
          complete: () => {
            console.log('personaje mostrado')
          },
          error: err => {
            console.error(err)
          }
        }
      )
    }
     if(resp != '') {
      this.planetService.getFilterPlanets(resp).subscribe(
        {
          next: value => {
            console.log(value);
            this.planets = value;
          },
          complete: () => {
            console.log('planetas mostrado')
          },
          error: err => {
            console.error(err)
          }
        }
      )
    }




  }

}
