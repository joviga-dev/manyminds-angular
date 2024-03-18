import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AddPedidosCompraService } from './add-pedidos-compra.service';
import { TableModule } from 'primeng/table';
import { Router,RouterModule } from '@angular/router';
import { ProdutosComponent } from '../produtos/produtos.component';
import { CommonModule } from '@angular/common';
import { ProdutosService } from '../produtos/produtos.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-add-pedidos-compra',
  standalone: true,
  imports: [
    InputTextModule,
    InputSwitchModule,
    FormsModule,
    InputTextareaModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    RouterModule,
    ProdutosComponent,
    CommonModule
  ],
  templateUrl: './add-pedidos-compra.component.html',
  styleUrl: './add-pedidos-compra.component.css',
})
export class AddPedidosCompraComponent {
  constructor(private service: AddPedidosCompraService, private router: Router, private service2: ProdutosService, private cdRef: ChangeDetectorRef) {}

  pedido: any = {
    status: true,
    obs: '',
    fornecedor: '',
    produtosParaCompra: [
    ],
    valorTotal: 0
  };

  fornecedores: any[] = [];

  produtos: any[] = [];

  fornecedorSelecionado: any = null;

  paginaAtual: number = 1;
  ultimaPagina: boolean = false;


  ngOnInit() {
    this.service.buscarFornecedores().subscribe((fornecedores: any[]) => {
      this.fornecedores = fornecedores;
    });
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

  gerarFornecedores() {
    this.service.gerarFornecedores().subscribe();
  }

  atualizaFornecedores(){
    this.service.buscarFornecedores().subscribe((fornecedores: any[]) => {
      this.fornecedores = fornecedores;
    });}

  add(produto: any) {
    const produtoExistente = this.pedido.produtosParaCompra.find((produtos: any) => produtos.codigo === produto.codigo);

    if (produtoExistente) {
      produtoExistente.quantidade++;
      produtoExistente.valorTotal = produtoExistente.quantidade * produto.valorUnitario;
    } else {
      const valorTotal = produto.valorUnitario * 1;
      this.pedido.produtosParaCompra.push({
        codigo: produto.codigo,
        quantidade: 1,
        valorTotal: valorTotal
      });
    }
  }


  remove(item: any) {
    const index = this.pedido.produtosParaCompra.indexOf(item);
    this.pedido.produtosParaCompra.splice(index, 1);
  }

  addPedidoCompra(pedido: any) {
    this.service.addPedido(pedido).subscribe({
      next: (response) => {
        this.router.navigate(['/menuPedidosCompra'])
      },
      error: (error) => {
        this.router.navigate(['/menuPedidosCompra'])
      }
    })
  }
  buscarProximos() {
    this.service2.buscarProximos(this.paginaAtual).subscribe({
      next: (response) => {
        this.produtos = response;
        this.ultimaPagina = response.length < 5;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
}
