import db from "../../../database/database";
import { criarTipoPagamentosDTO, editarTipoPagamentosDTO } from "../dto/financeiroDTO";

export class financeiroRepository {
  async criarTiposPagamentos(params: criarTipoPagamentosDTO) {
    const result = await db.tipos_pagamentos.create({
      data: params,
    });
    return result;
  }
  async listarTiposPagamentos() {
    const result = await db.tipos_pagamentos.findMany({
      include: { tipo_movimento: { select: { descricao: true } } },
    });
    return result;
  }
  async editarTiposPagamentos(params: editarTipoPagamentosDTO) {
    const result = await db.tipos_pagamentos.update({
      where: { cd_pagamento: params.cd_pagamento },
      data: params,
    });
    return result;
  }
}
