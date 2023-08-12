/******************************************************************************
 * Objetivo: Arquivo responsavel por retornar os estados de cada requirimento
 * Data: 11/08/2023
 * Versão: 1.0
 ******************************************************************************/

/******************************* Constante de ERROS ****************************/
const ERRO_ITENS = {status: "false", message: "Não há itens no carrinho de compra!"};
const ERRO_QUANTIDADE_ITENS = {status: "false", message: "Quantidade inválida!"}
const ERRO_ITEM_INVALIDO = {status: "false", message: "Item inválido!"}
const ERRO_FORMA_PAGAMENTO = {status: "false", message: "Forma de pagamento inválida!"}

export {
    ERRO_ITENS,
    ERRO_QUANTIDADE_ITENS,
    ERRO_ITEM_INVALIDO,
    ERRO_FORMA_PAGAMENTO
}
