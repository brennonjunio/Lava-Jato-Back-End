import db from "../../../database/database";
import { efetuarPagamentoServico } from "../dto/movimentacaoFinanceiraDTO";

export class movimentacaoFinanceiraRepository {
  async efetuarPagamentoServico(param: efetuarPagamentoServico) {
    const result = await db.$executeRawUnsafe(
      "select efetuar_pagamento(?,?,?,?,?)",
      param.nr_servico_p,
      param.cd_tipo_pagamento_p,
      param.cd_usuario_p,
      param.vlr_desconto_p,
      param.perc_desc_p
    );
    return result;
  }
}
