export abstract class ProdutoComponent {
  abstract getPreco(): number;

  adicionar(produto: ProdutoComponent): void {}
  remover(produto: ProdutoComponent): void {}
}
