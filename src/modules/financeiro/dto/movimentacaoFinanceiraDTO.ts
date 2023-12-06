export class efetuarPagamentoAtendimento{
    pagamentos: pag;
    nr_atendimento_p: number;
    cd_usuario_p: number;
    vl_desconto_p: number;
    perc_desc_p: number;
    dh_vencimento_p: string;
    troco_p:string
}
export class pag{
    cd_tipo_pagamento: number;
    valor: number
}

export interface adicionarMovimentacao {
    nr_seq_financeiro_p: number | null;
    cd_tipo_pagamento_p: number;
    valor: number;
    cd_usuario_p: number;
    direcao: number;
    observacao: string;
}