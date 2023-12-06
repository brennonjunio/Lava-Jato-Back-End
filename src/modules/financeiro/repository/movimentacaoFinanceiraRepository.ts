import db from "../../../database/database";
import {
  adicionarMovimentacao,
  efetuarPagamentoAtendimento,
} from "../dto/movimentacaoFinanceiraDTO";

export class movimentacaoFinanceiraRepository {
  async efetuarPagamentoAtendimento(param: efetuarPagamentoAtendimento) {
    const pagamento = JSON.stringify(param.pagamentos);
    const result = await db.$executeRawUnsafe(
      "select efetuarPagamento(?,?,?,?,?,?,?)",

      pagamento,
      param.nr_atendimento_p,
      param.cd_usuario_p,
      param.vl_desconto_p,
      param.perc_desc_p,
      param.dh_vencimento_p,
      param.troco_p
    );
    return result;
  }

  async listarTransacoesFinanceiro() {
    return await db.$queryRawUnsafe("select * from vw_financeiro_transacoes;");
  }
  async listarMovimentacoesFinanceiro() {
    return await db.$queryRawUnsafe(
      "select * from vw_financeiro_movimentacoes;"
    );
  }
  async adicionarMovimentacao(params: adicionarMovimentacao) {
    return await db.$executeRawUnsafe(
      "SELECT lava_jato.adicionarMovimentacao(:nr_seq_fincaneiro_p, :cd_tipo_pagamento_p, :valor_p, :cd_usuario_p, :direcao_movimento_p, :observacao_p)",
      params.nr_seq_financeiro_p == 0 ? null: params.nr_seq_financeiro_p,
      params.cd_tipo_pagamento_p,
      params.valor,
      params.cd_usuario_p,
      params.direcao,
      params.observacao
    );
  }
}
