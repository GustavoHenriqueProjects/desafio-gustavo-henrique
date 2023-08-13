/************************************************************************
 * Objetivo: Realizar a simulação de um lista de  formas de pagamentos
 * que podem ser aceitas pelo estabecimento, esses dados podem vir 
 * por exemplo de uma tabela no banco de dados que retorna uma array de objetos.
 * Data: 11/08/2023
 * Versão: 1.0
 ************************************************************************/

var formaPagamentoDB = [
    {
        "id" : 1,
        "tipo" : "dinheiro"
    },
    {
        "id" : 2,
        "tipo" : "debito"
    },
    {
        "id" : 3,
        "tipo" : "credito"
    }
]

export {
    formaPagamentoDB
};