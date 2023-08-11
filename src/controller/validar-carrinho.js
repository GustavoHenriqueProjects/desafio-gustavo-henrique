import { ERRO_ITENS } from "./modulo/config.js";

const valificarItens = (itens) => {

    if(itens == null || itens == undefined || itens == "") {
        return ERRO_ITENS.message
    }else{

    }

}

export {
    valificarItens
}