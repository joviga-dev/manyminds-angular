import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { CriarContaComponent } from './componentes/criar-conta/criar-conta.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { PedidosCompraComponent } from './componentes/pedidos-compra/pedidos-compra.component';
import { AddPedidosCompraComponent } from './componentes/add-pedidos-compra/add-pedidos-compra.component';
import { AddProdutosComponent } from './componentes/add-produtos/add-produtos.component';
import { LogsComponent } from './componentes/logs/logs.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'criar',
    component: CriarContaComponent,
  },
  {
    path: 'menuProdutos',
    component: ProdutosComponent,
  },
  {
    path: 'menuPedidosCompra',
    component: PedidosCompraComponent,
  },
  {
    path: 'menuPedidosCompra/addPedidosCompra',
    component: AddPedidosCompraComponent,
  }
  ,
  {
    path: 'menuProdutos/addProdutos',
    component: AddProdutosComponent,
  },
  {
    path: 'logs',
    component: LogsComponent
  }
];
