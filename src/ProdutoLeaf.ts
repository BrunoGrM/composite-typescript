import { ProdutoComponent } from './ProdutoComponent';

export class ProdutoLeaf implements ProdutoComponent {
  nome: string;
  preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }

  getPreco(): number {
    return this.preco;
  }

  adicionar() {}
  remover() {}
}
