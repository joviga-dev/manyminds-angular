import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet, Router, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CriarContaService } from './criar-conta.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-criar-conta',
  standalone: true,
  imports: [RouterOutlet,LoginComponent, HttpClientModule, ButtonModule, FormsModule, InputTextModule, RouterModule],
  templateUrl: './criar-conta.component.html',
  styleUrl: './criar-conta.component.css'
})
export class CriarContaComponent {

  login = {
    login: '',
    senha: '',
  };

  constructor(private service: CriarContaService, private router: Router, private serviceLogin: LoginService) {}

  criarConta(){
    this.service.criarConta(this.login.login, this.login.senha).subscribe({
      error: (error: any) => {
        this.router.navigate(['menuProdutos']);
        this.serviceLogin.logado = true;
      }
    });

}
}
