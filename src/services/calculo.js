import { cardapioDB } from "../modulo/json/cardapio.js";

const valorDinheiro = (itens) => {

    let total = 0;

    itens.forEach(item => {
        const [codigo, quantidade] = item.split(',');
        const cardapioItem = cardapioDB.find(entry => entry.codigo === codigo);

        if (cardapioItem) {
            const valorNumerico = parseFloat(cardapioItem.valor.replace("R$ ", "").replace(",", "."));
            total += valorNumerico * parseInt(quantidade);
        }
    });

    const desconto = total * 0.05;
    //total recebe o total menos o desconto
    total -= desconto

    return `R$ ${total.toFixed(2).replace(".", ",")}`;
}

const valorCredito = (itens) => {

    let total = 0;

    itens.forEach(item => {
        const [codigo, quantidade] = item.split(',');
        const cardapioItem = cardapioDB.find(entry => entry.codigo === codigo);

        if (cardapioItem) {
            const valorNumerico = parseFloat(cardapioItem.valor.replace("R$ ", "").replace(",", "."));
            total += valorNumerico * parseInt(quantidade);
        }
    });

    const desconto = total * 0.03;
    total += desconto

    return `R$ ${total.toFixed(2).replace(".", ",")}`;
}

const valorDebito = (itens) => {
    let total = 0;

    itens.forEach(item => {
        const [codigo, quantidade] = item.split(',');
        const cardapioItem = cardapioDB.find(entry => entry.codigo === codigo);

        if (cardapioItem) {
            const valorNumerico = parseFloat(cardapioItem.valor.replace("R$ ", "").replace(",", "."));
            total += valorNumerico * parseInt(quantidade);
        }
    });

    const desconto = total;

    return `R$ ${desconto.toFixed(2).replace(".", ",")}`;
}

export {
    valorDinheiro,
    valorCredito,
    valorDebito
}