export class criarTipoPagamentosDTO{
descricao: string;
qtd_parcelas: number;
}
export class editarTipoPagamentosDTO{
    cd_pagamento: number;
    descricao: string;
    qtd_parcelas: number;
    cd_tipo_movimento: number;
    }