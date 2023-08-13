import { statusCaixa } from "./services/statusCaixa.js";

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        let status = statusCaixa(metodoDePagamento, itens)
        return  status;
    }
}

export { CaixaDaLanchonete };


// const DB = (metodoDePagamento, itens) => {
//     let status = statusCaixa(metodoDePagamento, itens)
//     console.log(status)
// }

// DB("dinheiro", ["pizza,1"])