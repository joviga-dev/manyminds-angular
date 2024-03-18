import { ProdutosComponent } from './../produtos/produtos.component';
import { MenubarModule } from 'primeng/menubar';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private router: Router,private service: LoginService) {}

public items = [
  {
    label: 'Produtos',
    icon: 'pi pi-fw pi-box',
    routerLink: "menuProdutos"
  },
  {
    label: 'Pedidos de Compra',
    icon: 'pi pi-fw pi-dollar',
    routerLink: 'menuPedidosCompra'
  },
  {
    label: 'Logs',
    icon: 'pi pi-fw pi-book',
    command: () => {
      this.router.navigate(['/logs']);
    }
  },
  {
    label: 'Sair',
    icon: 'pi pi-fw pi-times',
    command: () => {
      this.service.deslogar();
      this.router.navigate(['']);
    }
  }
]
}
