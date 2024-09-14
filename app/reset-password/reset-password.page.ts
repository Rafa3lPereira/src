import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';  // Importamos ToastController

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  newPassword: string = '';
  confirmPassword: string = '';
  username: string = '';  // Para almacenar el nombre de usuario

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private toastController: ToastController  // Inyectamos ToastController
  ) {}

  ngOnInit() {
    // Obtenemos el nombre de usuario desde los query params
    this.route.queryParams.subscribe(params => {
      if (params['username']) {
        this.username = params['username'];
      }
    });
  }

  // Método para mostrar un Toast personalizado
  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 5000,  // Duración del Toast en milisegundos (5 segundos)
      color: 'success',  // Color del Toast (success, warning, danger, etc.)
      position: 'bottom'  // Posición del Toast (bottom, middle, top)
    });
    toast.present();
  }

  confirmPasswordChange() {
    if (this.newPassword === this.confirmPassword) {
      // Mostrar el Toast personalizado con el nombre de usuario
      this.showToast(`La contraseña se ha cambiado con éxito Sr@ ${this.username}`);

      // Redirigir al login después de mostrar el Toast
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 5000);  // Espera 3 segundos antes de redirigir para que el Toast se vea
    } else {
      this.showToast('Las contraseñas no coinciden');
    }
  }
}
