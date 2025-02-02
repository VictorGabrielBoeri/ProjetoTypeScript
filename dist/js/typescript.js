// Tipos Primitivos
let valor = 3000;
let nome = "";
let isPago = false;
let qualquer = "";
qualquer = 22;
// Arrays
const lista = [];
lista.push(2, 211, 22, 45, 45);
// Enum
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Tranfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0,
};
