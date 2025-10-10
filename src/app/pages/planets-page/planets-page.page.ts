import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItemSliding, IonItem, IonCard, IonImg, IonLabel, IonText, IonAvatar } from '@ionic/angular/standalone';
import { PlanetService } from 'src/app/services/planet.service';
import { LoadingController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import { Planet, PlanetInterface } from 'src/app/common/planet.interface';

@Component({
  selector: 'app-planets-page',
  templateUrl: './planets-page.page.html',
  styleUrls: ['./planets-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItemSliding, IonItem, IonCard, IonImg, IonLabel, IonText, IonAvatar]
})
export class PlanetsPagePage implements OnInit {
  private readonly planetService: PlanetService = inject(PlanetService);
  private readonly loadingCtrl: LoadingController = inject(LoadingController);
  private readonly toastService: ToastService = inject(ToastService);

  apiData!: PlanetInterface;
  planets: Planet[] = [];

  constructor() { }

  ngOnInit() {
    this. loadPlanets();
  }
  
  private async loadPlanets() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      spinner: 'dots'
    });
    await loading.present();

    this.planetService.getPlanets().subscribe({
      next:value => {
          loading.dismiss();
          this.apiData = value;
          this.planets = value.data;
      },
      error: err => {
        this.toastService.mostrarToast(err.message, 'danger');
        loading.dismiss();
      },
      complete: () => this.toastService.mostrarToast('¡Carga completa!', 'success')
    });
  }

}
