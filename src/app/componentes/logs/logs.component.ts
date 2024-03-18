import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { LogsService } from './logs.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [TableModule, ButtonModule],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css'
})
export class LogsComponent {

  constructor(private service: LogsService) {
  }

  logs: any[] = [];
  paginaAtual: number = 1;
  ultimaPagina: boolean = false;

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

  buscarProximos() {
    this.service.getLogs(this.paginaAtual).subscribe({
      next: (response) => {
        this.logs = response;
        this.ultimaPagina = response.length < 10;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
}
