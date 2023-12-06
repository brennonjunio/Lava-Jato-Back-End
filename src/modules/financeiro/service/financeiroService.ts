import AppStatus from "../../../shared/AppStatus";
import {
  criarTipoPagamentosDTO,
  editarTipoPagamentosDTO,
} from "../dto/financeiroDTO";
import { adicionarMovimentacao, efetuarPagamentoAtendimento, filtrosFinanceiros, filtrosTransacoes } from "../dto/movimentacaoFinanceiraDTO";
import { financeiroRepository } from "../repository/financeiroRepository";
import { movimentacaoFinanceiraRepository } from "../repository/movimentacaoFinanceiraRepository";

export class financeiroService {
  private repository: financeiroRepository = new financeiroRepository();
  private repositoryMovimentacao: movimentacaoFinanceiraRepository =
    new movimentacaoFinanceiraRepository();

  async criarTiposPagamentos(params: criarTipoPagamentosDTO) {
    try {
      const result = await this.repository.criarTiposPagamentos(params);
      return AppStatus.appSucess("Criado Com Sucesso!", 1);
    } catch (e) {
      return AppStatus.appError("Erro ao Criar Tipo de Pagamento", 0);
    }
  }
  async listarTiposPagamentos() {
    try {
      const result = await this.repository.listarTiposPagamentos();
      return AppStatus.appSucess(
        "Sucesso ao Listar Tipos de Pagamentos!",
        result
      );
    } catch (e) {
      return AppStatus.appError("Erro ao Listar Tipos de Pagamentos", 0);
    }
  }
  async editarTiposPagamentos(params: editarTipoPagamentosDTO) {
    try {
      const result = await this.repository.editarTiposPagamentos(params);

      return AppStatus.appSucess(
        "Sucesso ao Editar Tipos de Pagamentos!",
        params
      );
    } catch (e) {
      return AppStatus.appError("Erro ao Editar Tipos de Pagamentos!", 0);
    }
  }
  async deletarTipoPagamento(cd_pagamento: number) {
    try {
      const result = await this.repository.deletarTipoPagamento(cd_pagamento);

      return AppStatus.deletadoSucess;
    } catch (e) {
      return AppStatus.appError("Erro ao Deletar Tipo de Pagamento!", 0);
    }
  }
  async efetuarPagamentoAtendimento(param: efetuarPagamentoAtendimento) {
    try {
      const result =
        await this.repositoryMovimentacao.efetuarPagamentoAtendimento(param);
      return AppStatus.appSucess("Sucesso ao Efetuar Pagamento", 1);
    } catch (e) {
      return AppStatus.appError("Erro ao Efetuar Pagamento!", e);
    }
  }
async listarTransacoesFinanceiro(params: filtrosTransacoes){
  try {
    const result = await this.repositoryMovimentacao.listarTransacoesFinanceiro(params);
    return AppStatus.appSucess("Sucesso ao Listar Transações", result);
  } catch (e) {
    return AppStatus.appError("Erro ao Efetuar Pagamento!", e);
  }
}
async listarMovimentacoesFinanceiro(params: filtrosFinanceiros){
  try {
    const result = await this.repositoryMovimentacao.listarMovimentacoesFinanceiro(params);
    return AppStatus.appSucess("Sucesso ao Listar Movimentações", result);
  } catch (e) {
    return AppStatus.appError("Erro ao Efetuar Pagamento!", e);
  }
}
async adicionarMovimentacao(params: adicionarMovimentacao){
  try {
    const result = await this.repositoryMovimentacao.adicionarMovimentacao(params);
    return AppStatus.appSucess('Sucesso ao adicionar transação',1)
  } catch (e) {
    return AppStatus.appError("Erro ao adicionar transação!", e);
  }
}

}
