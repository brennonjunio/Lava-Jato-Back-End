import { criarTipoPagamentosDTO } from "../dto/financeiroDTO";
import { financeiroRepository } from "../repository/financeiroRepository";

export class financeiroService {
  private repository: financeiroRepository = new financeiroRepository();
  async criarTiposPagamentos(params: criarTipoPagamentosDTO) {
    try {
      const result = await this.repository.criarTiposPagamentos(params);
      return {
        statusCode: 200,
        message: "Sucesso ao criar Tipo de Pagamento!",
        data: result,
      };
    } catch (e) {
      throw `Erro ao Criar Tipo de Pagamento: ${e}`;
    }
  }
}
