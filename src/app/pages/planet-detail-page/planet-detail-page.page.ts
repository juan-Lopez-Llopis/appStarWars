import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonCard, IonCardTitle, IonImg, IonBackButton, IonCardContent } from '@ionic/angular/standalone';
import { PlanetService } from 'src/app/services/planet.service';
import { ToastService } from 'src/app/services/toast.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Planet } from 'src/app/common/planet.interface';


@Component({
  selector: 'app-planet-detail-page',
  templateUrl: './planet-detail-page.page.html',
  styleUrls: ['./planet-detail-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonCard, IonCardTitle, IonImg, IonBackButton, IonCardContent]
})
export class PlanetDetailPagePage implements OnInit {
  @Input('id') id!: string;
  private readonly planetService: PlanetService = inject(PlanetService);
  private readonly toastService: ToastService = inject(ToastService);
  private readonly loadingCtrl: LoadingController = inject(LoadingController);
  private readonly route: ActivatedRoute = inject(ActivatedRoute); 

  planet!: Planet;

  constructor() { }

  ngOnInit() {
    const planetId = this.route.snapshot.paramMap.get('id');

    if(planetId) {
      this.id = planetId;
      this.loadPlanet();
    }else {
      this.toastService.mostrarToast('Error: ID del planeta no proporcionado en la URL.', 'danger')
    }
  }

  private loadPlanet() {
    this.planetService.getPlanet(this.id).subscribe({
      next: value => {
        this.planet = value.data;
        this.toastService.mostrarToast('¡Planeta cargado!', 'success')
        console.log(this.planet)
      },
      error: err => {
        this.toastService.mostrarToast(err.message, 'danger');
      },
      complete: () => {}
    })
  }


}
