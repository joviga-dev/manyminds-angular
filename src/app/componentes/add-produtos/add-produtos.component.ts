import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { AddProdutosService } from './add-produtos.service';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './add-produtos.component.html',
  standalone: true,
  imports: [InputTextModule, InputSwitchModule, CommonModule , FormsModule, ButtonModule, RouterModule],
  styleUrls: ['./add-produtos.component.css']
})
export class AddProdutosComponent {
  constructor(private service : AddProdutosService, private router: Router){}

  produto: any = {
    codigo: null,
    nome: '',
    valorUnitario: null,
    status: true
  };

addProduto(){
  this.service.addProduto(this.produto).subscribe({
    next: () => {
      this.router.navigate(['menuProdutos'])
    },
    error: () => {
      this.router.navigate(['menuProdutos'])
    }
  })
}
}
