import { inject, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private readonly toastCtrl: ToastController = inject(ToastController);

  constructor(){}

  async mostrarToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      color,
      duration: 1500,
      position: 'bottom'

    });
    await toast.present();

  }
  
}
