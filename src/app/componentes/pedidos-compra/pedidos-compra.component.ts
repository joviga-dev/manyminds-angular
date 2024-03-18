import { Pedido } from './../../interfaces/pedido';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PedidosCompraService } from './pedidos-compra-service.';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DialogModule } from 'primeng/dialog';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-pedidos-compra',
  standalone: true,
  imports: [TableModule, ButtonModule, FormsModule, CommonModule, InputTextModule, InputSwitchModule, DialogModule, RouterModule  ],
  templateUrl: './pedidos-compra.component.html',
  styleUrl: './pedidos-compra.component.css',
})

export class PedidosCompraComponent {

  pedidos: any[] = [];
  paginaAtual: number = 1;
  ultimaPagina: boolean = false;
  visible: boolean = false;

  constructor(private service: PedidosCompraService) {}

  ngOnInit() {
    this.buscarProximos();
  }

  showDialog() {
    this.visible = true;
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

  remover(pedido: any) {
    this.service.remover(pedido.id).subscribe({
      error: (error) => {
        this.buscarProximos();
      }
    })
  }

  finalizar(pedido: any) {
    this.service.finalizar(pedido.id).subscribe({
      error: (error) => {
        this.buscarProximos();
      }
    })
  }

  buscarProximos() {
    this.service.buscarProximos(this.paginaAtual).subscribe({
      next: (response) => {
        this.pedidos = response;
        this.ultimaPagina = response.length < 5;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

  onRowEditInit(pedido: any) {
    pedido.editing = true;
  }
  onRowEditSave(pedidos: any) {
    this.service.atualizar(pedidos.id, pedidos).subscribe({
      next: (response) => {
        this.buscarProximos();
      },
      error: (error) => {
        console.error('Error:', error);
        this.buscarProximos();
      }
    });
  }

  onRowEditCancel(pedido: any) {
    pedido.editing = false;
  }
}

