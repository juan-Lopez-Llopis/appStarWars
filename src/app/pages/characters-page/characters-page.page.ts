import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonImg, IonLabel, IonText } from '@ionic/angular/standalone';
import { CharacterService } from 'src/app/services/character.service';
import { Character, CharacterInterface } from 'src/app/common/character.interface';
import { LoadingController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.page.html',
  styleUrls: ['./characters-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonAvatar, IonImg, IonLabel, IonText, RouterLink]
})
export class CharactersPagePage implements OnInit {
  private readonly characterService: CharacterService = inject(CharacterService);
  private readonly loadingCtrl: LoadingController = inject(LoadingController);
  private readonly toastService: ToastService = inject(ToastService);

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
      },
      error: err => {
        this.toastService.mostrarToast(err.message,'danger');
        loading.dismiss();
      },
      complete: () => this.toastService.mostrarToast('¡Carga completa!', 'success')
    })

  }

 getSideClass(isDarkSide: boolean | undefined): string {
  if(isDarkSide === undefined || isDarkSide === null) {
    return 'white-background';
  }
  return isDarkSide ? 'black-background' : 'white-background'
 }

}
