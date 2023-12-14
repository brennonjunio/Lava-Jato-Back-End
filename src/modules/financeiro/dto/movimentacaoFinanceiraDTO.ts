export class efetuarPagamentoAtendimento {
  pagamentos: pag;
  nr_atendimento_p: number;
  cd_usuario_p: number;
  vl_desconto_p: number;
  perc_desc_p: number;
  dh_vencimento_p: string;
  troco_p: string;
  constructor(
    pagamentos: pag,
    nr_atendimento_p: number,
    cd_usuario_p: number,
    vl_desconto_p: number,
    perc_desc_p: number,
    dh_vencimento_p: string,
    troco_p: string
  ) {
    this.pagamentos = pagamentos;
    this.nr_atendimento_p = nr_atendimento_p;
    this.cd_usuario_p = cd_usuario_p;
    this.vl_desconto_p = vl_desconto_p;
    this.perc_desc_p = perc_desc_p;
    this.dh_vencimento_p = dh_vencimento_p;
    this.troco_p = troco_p;
  }
}
export class pag {
  cd_tipo_pagamento: number;
  valor: number;
  constructor(cd_tipo_pagamento: number, valor: number) {
    this.cd_tipo_pagamento = cd_tipo_pagamento;
    this.valor = valor;
  }
}

export interface adicionarMovimentacao {
  nr_seq_financeiro_p: number | null;
  cd_tipo_pagamento_p: number;
  valor: number;
  cd_usuario_p: number;
  direcao: number;
  observacao: string;
}

export interface filtrosTransacoes {
  seq_transacao?: number | null;
  nr_atendimento?: number | null;
  cliente?: string | null;
  nr_seq_financeiro?: number | null;
  tipo_pagamento?: string | null;
  valor?: number | null;
  tipo?: string | null;
  dt_inicial?: string | null;
  dt_final?: string | null;
  observacao?: null | null;
}

export interface filtrosFinanceiros {
  status?: string | null;
  nr_atendimento?: number | null;
  cliente?: string | null;
  nr_seq_financeiro?: number | null;
  valor?: number | null;
  tipo?: string | null;
  dt_inicial?: string | null;
  dt_final?: string | null;
  observacao?: number | null;
}
