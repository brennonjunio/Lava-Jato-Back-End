import { criarServicoDTO } from "../dto/servicosDTO";
import { servicosRepository } from "../repository/servicosRepository";

export class servicosService {
  private repository: servicosRepository = new servicosRepository();
  async criarServico(param: criarServicoDTO) {
    try{
    const result = await this.repository.criarServico(param);
    return {
        statusCode: 200,
        message: "Serviço Criado Com Sucesso!",
        data: result,
      };
    } catch (e) {
        throw(`erro na Criação Do serviço: ${e}`);
    }
  }
}