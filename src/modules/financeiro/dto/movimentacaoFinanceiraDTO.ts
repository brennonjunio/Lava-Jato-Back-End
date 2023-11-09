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