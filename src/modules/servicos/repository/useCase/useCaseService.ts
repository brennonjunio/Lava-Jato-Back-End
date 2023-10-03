import db from "../../../../database/database";

export class UseCaseService {
  async validaServicoUsado(params: number) {
    return await db.servicos_atendimento.findFirst({
      where: { cd_servico: params },
      select: { cd_servico: true },
    });
  }
}
