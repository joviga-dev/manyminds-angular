import { Component, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  login = {
    login: '',
    senha: '',
  };

  constructor(private service: LoginService, private router: Router) {}

  fazerLogin() {
    this.service.logar(this.login.login, this.login.senha);
  }
}

