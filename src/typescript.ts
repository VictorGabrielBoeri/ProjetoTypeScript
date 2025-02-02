// Tipos Primitivos
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22;

// Arrays
const lista: number[] = [];
lista.push(2, 211, 22, 45, 45);

// Tipos Personalizado (Type Alias)
type Transacao = {
    tipoTransacao: string,
    data: Date,
    valor: number,
}

// Enum
enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Tranferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto",
}


const novaTransacao: Transacao = {
    tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0,
}