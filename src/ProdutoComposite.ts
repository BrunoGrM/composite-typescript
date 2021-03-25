import { ProdutoComponent } from './ProdutoComponent';

export class ProdutoComposite implements ProdutoComponent {
  private children: ProdutoComponent[] = [];

  adicionar(...produtos: ProdutoComponent[]): void {
    produtos.forEach((produto) => this.children.push(produto));
  }

  remover(produto: ProdutoComponent): void {
    const produtoIndex = this.children.indexOf(produto);
    if (produtoIndex !== -1) this.children.splice(produtoIndex, 1);
  }

  getPreco(): number {
    return this.children.reduce((sum, child) => sum + child.getPreco(), 0);
  }
}
