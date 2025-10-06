import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-planet-detail-page',
  templateUrl: './planet-detail-page.page.html',
  styleUrls: ['./planet-detail-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PlanetDetailPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
