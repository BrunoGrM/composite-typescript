import { ProdutoComposite } from './ProdutoComposite';
import { ProdutoLeaf } from './ProdutoLeaf';

const processador = new ProdutoLeaf('Processador', 2000);
const placaVideo = new ProdutoLeaf('Placa de Vídeo', 3000);
const ssd = new ProdutoLeaf('SSD', 200);
const pcMontado = new ProdutoComposite();
pcMontado.adicionar(processador, placaVideo, ssd);

const mouse = new ProdutoLeaf('Mouse', 150);
const teclado = new ProdutoLeaf('Teclado', 300);
const perifericosBox = new ProdutoComposite();
perifericosBox.adicionar(mouse, teclado);
pcMontado.adicionar(perifericosBox);

console.log();
console.log(pcMontado);
console.log('----------------');
console.log(perifericosBox);
console.log(`Preço total: ${pcMontado.getPreco()}`);
console.log();
