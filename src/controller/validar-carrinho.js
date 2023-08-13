/*******************************************************************************
 * Objetivo: Realizar a verificação dos itens e da forma de pagamento,
 * e se for válido o tipo de conteúdo passado, permitir acesso aos serviçõs.
 * Data: 11/08/2023.
 * versão: 1.0
 ********************************************************************************/

import { ERRO_ITENS, ERRO_QUANTIDADE_ITENS, ERRO_ITEM_INVALIDO, ERRO_FORMA_PAGAMENTO, ERRO_ITEM_EXTRA } from "./modulo/config.js";
import { cardapioDB } from "../model/cardapio.js";
import { formaPagamentoDB } from "../model/formas-pagamento.js";

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
                let [codigo, quantidade] = item.split(',');
                let cardapioItem = cardapioDB.find(entry => entry.codigo === codigo);

                if (!cardapioItem) {
                    statusItens = ERRO_ITEM_INVALIDO.message;
                }else {
                    if(itens[0].toLowerCase().includes("chantily") || itens[0].toLowerCase().includes("queijo")){
                        statusItens = ERRO_ITEM_EXTRA.message
                    }
                }
            });
        }
    }

    return statusItens;
}

const verificarFormaPagamento = (tipoPagamento) =>{

    const formaPagamento = tipoPagamento
    const statusTipoPagamento = formaPagamentoDB.find(entry => entry.tipo === formaPagamento)

    if(!statusTipoPagamento) {
        let statusFormaPagamento = ERRO_FORMA_PAGAMENTO.message
        return statusFormaPagamento
    }
}

export {
    verificarItens,
    verificarFormaPagamento
}