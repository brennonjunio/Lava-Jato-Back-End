import { criarTipoPagamentosDTO, editarTipoPagamentosDTO } from "../dto/financeiroDTO";
import { efetuarPagamentoServico } from "../dto/movimentacaoFinanceiraDTO";
import { financeiroRepository } from "../repository/financeiroRepository";
import { movimentacaoFinanceiraRepository } from "../repository/movimentacaoFinanceiraRepository";

export class financeiroService {
  private repository: financeiroRepository = new financeiroRepository();
  private repositoryMovimentacao: movimentacaoFinanceiraRepository = new movimentacaoFinanceiraRepository();

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
  async efetuarPagamentoServico(param:efetuarPagamentoServico){
    try {
      const result = await this.repositoryMovimentacao.efetuarPagamentoServico(
        param
      );
      return {
        statusCode: 200,
        message: "Sucesso ao Efetuar Pagamento!",
        data: result,
      };
    } catch (e) {
      throw `Erro ao efetuar Pagamento: ${e}`;
    }
}
}
