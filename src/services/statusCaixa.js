import { verificarItens } from "../controller/validar-carrinho.js"
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

    let statusItensVazio = verificarItens(itens)
    if (statusItensVazio) {
        return statusItensVazio
    } else{

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
    }
}

export {
    statusCaixa
}