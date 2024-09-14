import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = '';  // Variable para almacenar el nombre del usuario

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtenemos el nombre de usuario desde los query params
    this.route.queryParams.subscribe(params => {
      if (params['username']) {
        this.username = params['username'];
      }
    });
  }

  logout() {
    // Redirige al usuario al login cuando cierre sesión
    this.router.navigate(['/login']);
  }
}
