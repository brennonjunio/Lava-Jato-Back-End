import db from "../../../database/database";
import { criarTipoPagamentosDTO } from "../dto/financeiroDTO";

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
}
