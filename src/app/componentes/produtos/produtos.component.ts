import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ProdutosService } from './produtos.service';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [TableModule, ButtonModule, FormsModule, CommonModule, InputTextModule, InputSwitchModule, RouterLink ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css',
})
export class ProdutosComponent {
  produtos: any[] = [];
  paginaAtual: number = 1;
  ultimaPagina: boolean = false;

  constructor(private service: ProdutosService) {}

  ngOnInit() {
    this.buscarProximos();
  }

  isLastPage(): boolean {
    return this.ultimaPagina;
  }

  isFirstPage(): boolean {
    return this.paginaAtual === 1;
  }

  next() {
    if (!this.isLastPage()) {
      this.paginaAtual++;
      this.buscarProximos();
    }
  }

  prev() {
    if (!this.isFirstPage()) {
      this.paginaAtual--;
      this.buscarProximos();
    }
  }

  reset() {
    this.paginaAtual = 1;
    this.buscarProximos();
  }

  delete(product: any) {
    this.service.apagar(product.codigo).subscribe({
      error: (error) => {
        this.buscarProximos();
      }
    })
  }

  reativar(product: any) {
    this.service.reativar(product.codigo).subscribe({
      error: (error) => {
        this.buscarProximos();
      }
    })
  }

  buscarProximos() {
    this.service.buscarProximos(this.paginaAtual).subscribe({
      next: (response) => {
        this.produtos = response;
        this.ultimaPagina = response.length < 5;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

  onRowEditInit(product: any) {
    product.editing = true;
  }
  onRowEditSave(produtos: any) {
    this.service.atualizar(produtos.codigo, produtos).subscribe({
      next: (response) => {
        this.buscarProximos();
      },
      error: (error) => {
        console.error('Error:', error);
        this.buscarProximos();
      }
    });
  }

  onRowEditCancel(product: any, rowIndex: number) {
    product.editing = false;
  }
}


