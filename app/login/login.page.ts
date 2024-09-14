import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username && this.password) {
      // Redirige al Home si las credenciales son válidas
      this.router.navigate(['/home'], { queryParams: { username: this.username } });
    } else {
      alert('Por favor, ingresa el usuario y la contraseña');
    }
  }

  goToResetPassword() {
    // Redirige a la página de restablecer contraseña pasando el nombre de usuario
    this.router.navigate(['/reset-password'], { queryParams: { username: this.username } });
  }
}
