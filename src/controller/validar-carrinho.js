import { ERRO_ITENS } from "./modulo/config.js";

const verificarItens = (itens) => {

    if(itens == null || itens == undefined || itens == "") {
        return ERRO_ITENS.message
    }
}

export {
    verificarItens
}