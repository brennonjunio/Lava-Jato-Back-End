export class criarTipoPagamentosDTO {
  descricao: string;
  qtd_parcelas: number;
  constructor(descricao: string, qtd_parcelas: number) {
    this.descricao = descricao;
    this.qtd_parcelas = qtd_parcelas;
  }
}
export class editarTipoPagamentosDTO {
  cd_pagamento: number;
  descricao: string;
  qtd_parcelas: number;
  cd_tipo_movimento: number;
  constructor(
    cd_pagamento: number,
    descricao: string,
    qtd_parcelas: number,
    cd_tipo_movimento: number
  ) {
    this.cd_pagamento = cd_pagamento;
    this.descricao = descricao;
    this.qtd_parcelas = qtd_parcelas;
    this.cd_tipo_movimento = cd_tipo_movimento;
  }
}
