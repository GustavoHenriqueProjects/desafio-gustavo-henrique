import { valificarItens } from "./controller/validar-carrinho.js";

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        const status = valificarItens(itens);
        return  status;
    }

}

export { CaixaDaLanchonete };
