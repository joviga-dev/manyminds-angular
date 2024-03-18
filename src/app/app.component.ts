import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './componentes/menu/menu.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from './componentes/login/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent, HttpClientModule, MenuComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'manyminds teste';

  constructor(public service: LoginService, private router: Router) {}

  logado: boolean = false;

  getService(): LoginService {
    return this.service;
  }
}
