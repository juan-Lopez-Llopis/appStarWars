import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-character-detail-page',
  templateUrl: './character-detail-page.page.html',
  styleUrls: ['./character-detail-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CharacterDetailPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
