import db from "../../../database/database";
import { efetuarPagamentoAtendimento } from "../dto/movimentacaoFinanceiraDTO";

export class movimentacaoFinanceiraRepository {
  async efetuarPagamentoAtendimento(param: efetuarPagamentoAtendimento) {
    const pagamento = JSON.stringify(param.pagamentos);
    const result = await db.$executeRawUnsafe(
      "select efetuarPagamento(?,?,?,?,?,?)",

      pagamento,
      param.nr_atendimento_p,
      param.cd_usuario_p,
      param.vl_desconto_p,
      param.perc_desc_p,
      param.dh_vencimento_p
    );
    return result;
  }
}
