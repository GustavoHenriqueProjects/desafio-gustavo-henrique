import { ERRO_ITENS, ERRO_QUANTIDADE_ITENS, ERRO_ITEM_INVALIDO } from "./modulo/config.js";
import { cardapioDB } from "../modulo/json/cardapio.js";

const verificarItens = (itens) => {

    let statusItens = "";

    if (itens.length == 0) {
        statusItens = ERRO_ITENS.message;
    } else {
        let separaDados = itens[0].split(",");

        if (separaDados.length === 2 && parseFloat(separaDados[1]) === 0) {
            statusItens = ERRO_QUANTIDADE_ITENS.message;
        } else if (separaDados.length === 1) {
            statusItens = ERRO_ITEM_INVALIDO.message;
        } else {
            itens.forEach(item => {
                const [codigo, quantidade] = item.split(',');
                const cardapioItem = cardapioDB.find(entry => entry.codigo === codigo);

                if (!cardapioItem) {
                    statusItens = ERRO_ITEM_INVALIDO.message;
                }
            });
        }
    }

    return statusItens;
}

const verificarFormaPagamento = () =>{
    
}

export {
    verificarItens
}