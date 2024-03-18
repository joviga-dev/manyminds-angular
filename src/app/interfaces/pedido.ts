import { ItemPedido } from './item-pedido';
export interface Pedido {
  id: number;
  itens: ItemPedido[];
  fornecedor: {
    id: number;
    status: boolean;
  };
  status: boolean;
  obs: string;
}
