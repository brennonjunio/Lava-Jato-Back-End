import { criarTipoPagamentosDTO, editarTipoPagamentosDTO } from "../dto/financeiroDTO";
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
  async listarTiposPagamentos() {
    try {
      const result = await this.repository.listarTiposPagamentos();
      return {
        statusCode: 200,
        message: "Sucesso ao listar Tipos de Pagamentos!",
        data: result,
      };

    } catch (e) {
      throw `Erro ao Listar Tipos de Pagamentos: ${e}`;
    }
  }
  async editarTiposPagamentos(params: editarTipoPagamentosDTO) {
    try {
      const result = await this.repository.editarTiposPagamentos(params);

      return {
        statusCode: 200,
        message: "Sucesso ao Editar Tipo de Pagamento!",
        data: result,
      };

    } catch (e) {
      throw `Erro ao Editar Tipo de Pagamento: ${e}`;
    }
  }
  async deletarTipoPagamento(cd_pagamento: number){
    try {
        const result = await this.repository.deletarTipoPagamento(cd_pagamento);
        
        return {
            statusCode: 200,
            message: "Sucesso ao Editar Tipo de Pagamento!",
            data: result,
          };
    
        } catch (e) {
          throw `Erro ao Editar Tipo de Pagamento: ${e}`;
        }
  }
}
