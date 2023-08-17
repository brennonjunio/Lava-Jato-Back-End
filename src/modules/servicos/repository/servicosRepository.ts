import db from "../../../database/database";
import { criarServicoDTO } from "../dto/servicosDTO";
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
}
