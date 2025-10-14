import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonImg, IonCardContent, IonLabel, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/common/character.interface';
import { ToastService } from 'src/app/services/toast.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-character-detail-page',
  templateUrl: './character-detail-page.page.html',
  styleUrls: ['./character-detail-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardTitle, IonImg, IonCardContent, IonLabel, IonButton, IonButtons, IonBackButton]
})
export class CharacterDetailPagePage implements OnInit {
  @Input('id') id!: string;
  private readonly characterService: CharacterService = inject(CharacterService);
  private readonly toastService: ToastService = inject(ToastService);
  private readonly loadingCtrl: LoadingController = inject(LoadingController);
  private readonly route: ActivatedRoute = inject(ActivatedRoute)
  character!: Character;

  constructor() { }

  ngOnInit() {
    const charId = this.route.snapshot.paramMap.get('id');

    if(charId) {
      this.id = charId;
      this.loadCharacter();
    }else {
      this.toastService.mostrarToast('Error: ID del personaje no proporcionado en la URL.','danger')
    }   
  }

  private  loadCharacter() {
    this.characterService.getChararacter(this.id).subscribe({
      next: value => {
        this.character = value.data;
        this.toastService.mostrarToast('¡Personaje cargado!','success')
        console.log(this.character)
      },
      error: err => {
        this.toastService.mostrarToast(err.message, 'danger');
      },
      complete: () => {}
    })
  }

}
