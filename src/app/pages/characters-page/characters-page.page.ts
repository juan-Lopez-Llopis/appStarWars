import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { characterService } from 'src/app/services/character.service';
import { Character, CharacterInterface } from 'src/app/common/character.interface';
import { LoadingController } from '@ionic/angular';
import { Toast, toastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.page.html',
  styleUrls: ['./characters-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CharactersPagePage implements OnInit {
  private readonly characterService: characterService = inject(characterService);
  private readonly loadingCtrl: LoadingController = inject(LoadingController);
  private readonly toastService: toastService = inject(toastService);

  apiData!: CharacterInterface;
  characters: Character[] = [];

  constructor() { }

  ngOnInit() {
    this.loadCharacters();
  }

  private async loadCharacters(){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      spinner: 'dots'
    });
    await loading.present();

    this.characterService.getCharacters().subscribe({
      next: value => {
        loading.dismiss();
        this.apiData = value;
        this.characters = value.data;
      }
    })

  }

}
