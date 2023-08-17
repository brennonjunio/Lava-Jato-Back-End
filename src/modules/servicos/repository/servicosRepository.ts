import db from "../../../database/database";
import { criarServicoDTO, updateServiceDTO } from "../dto/servicosDTO";
export class servicosRepository {
  async criarServico(param: criarServicoDTO) {
    const result = await db.servicos.create({
      data: param,
    });
    return result;
  }
  async listarServicos() {
    const result = await db.servicos.findMany({});
    return result;
  }
  async editarServicos( params: updateServiceDTO) {
    const result = await db.servicos.update({
      where: { cd_servico: params.cd_servico},
      data: params,
    });
    return result;
  }
}
