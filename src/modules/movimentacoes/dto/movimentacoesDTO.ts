export class criarNovaMovimentacaoDTO {
  cd_cliente?: number;
  cd_servico?: number;
  dh_mov: Date;
  quantidade: number;
  vlr_unit: number;
  perc_desconto?: number;
  observacao?: number;
  vlr_desconto?: number;
  cd_tipo_pagamento: number;
  cd_usuario: number;
  cd_agenda?: number;
  nr_seq_servico_agendado?: number;
  cd_tipo_movimento: number;
}
