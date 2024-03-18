
export interface ItemPedido {
  id: number;
  produto: {
    codigo: number;
    nome: string;
    valorUnitario: number;
    status: boolean;
  };
  quantidade: number;
  valorTotal: number;
}
