/********************************************************************
 * Objetivo: Retorna os status do caixa com os erros ou aprovações
 * na selação de itens e forma de pagamento.
 * Data: 11/08/2023.
 * Versão: 1.0
 ********************************************************************/

import { verificarItens, verificarFormaPagamento } from "../controller/validar-carrinho.js"
import {valorDinheiro, valorCredito, valorDebito} from "./calculo.js"
 
const pagamentoDinheiro = (itens) =>{

    let statusValor = valorDinheiro(itens);
    
    return statusValor;
}

const pagamentoCredito = (itens) =>{

    let statusValor = valorCredito(itens);

    return statusValor;
}

const pagamentoDebito = (itens) => {
    let statusValor = valorDebito(itens);

    return statusValor;
}

const statusCaixa = (metodoDePagamento, itens) => {

    let valorPagamento = ""

    let statusItens = verificarItens(itens)
    if (statusItens) {

        return statusItens
        
    } else{

        let erroTipoPagamento = verificarFormaPagamento(metodoDePagamento)

        if(!erroTipoPagamento){
            if(metodoDePagamento == "dinheiro"){

                let totalDinheiro = pagamentoDinheiro(itens)
                valorPagamento = totalDinheiro

            } else if (metodoDePagamento == "credito"){

                let totalCredito = pagamentoCredito(itens)
                valorPagamento = totalCredito

            }else if (metodoDePagamento == "debito"){
                
                let totalDebito = pagamentoDebito(itens)
                valorPagamento = totalDebito

            }
            return valorPagamento

        }else{

            return erroTipoPagamento
        }
    }
}

export {
    statusCaixa
}