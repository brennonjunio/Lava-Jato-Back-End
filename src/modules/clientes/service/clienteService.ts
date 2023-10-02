import { CriarClienteDTO } from "../dto/criarClienteDTO";
import { updateClienteDTO } from "../dto/updateClienteDTO";
import { ClienteRepository } from "../repository/clientesRepository";
import { useCase } from "../repository/useCase/useCaseClientes";
export class ClienteService {
  private clienteRepository: ClienteRepository = new ClienteRepository();
  private useCaseCliente: useCase = new useCase();

  async salvar(param: CriarClienteDTO) {
    if (await this.useCaseCliente.validaClienteExistente(param.cpf_cnpj)) {
      throw `Cpf do Cliente Já Cadastrado`;
    }
    try {
      const result = await this.clienteRepository.criarCliente(param);
      return {
        statusCode: 200,
        status: true,
        data: result,
        message: "Sucesso ao Salvar Cliente!",
      };
    } catch (e) {
      throw `Erro ao Cadastrar: ${e}`;
    }
  }

  async atualizar(param: updateClienteDTO) {
    
    if (param.cpf_cnpj) {
      if (await this.useCaseCliente.validaClienteExistente(param.cpf_cnpj)) {
        throw `Cpf do Cliente Já Cadastrado`;
      }
    }

    try {
      const data = await this.clienteRepository.atualizarCliente(param);
      return {
        statusCode: 204,
        status: true,
        message: "Sucesso ao Atualizar cadastro do Cliente!",
        data: [data],
      };
    } catch (e) {
      throw `erro ao Atualizar Cadastro: ${e}`;
    }
  }
  async listar() {
    try {
      const result = await this.clienteRepository.listarClientes();
      return {
        statusCode: 200,
        status: true,
        data: result,
        message: "Sucesso ao Listar Clientes!",
      };
    } catch (e) {
      throw `erro ao Listar Clientes: ${e}`;
    }
  }
  async deletar(cd_cliente: number) {
    if (await this.useCaseCliente.validaServicoExistente(cd_cliente)) {
      const errorMessage = "Não é possível deletar Cliente com atendimentos";
      throw errorMessage;
    }
    try {
      const result = await this.clienteRepository.deletarCliente(cd_cliente);
      return {
        statusCode: 200,
        status: true,
        data: result,
        message: "Sucesso ao deletar Cliente!",
      };
    } catch (e) {
      throw `erro ao Deletar Clientes: ${e}`;
    }
  }
  async inativar(cd_cliente: number) {
    try {
      const result = await this.clienteRepository.inativarCliente(cd_cliente);
      return {
        statusCode: 200,
        status: true,
        data: result,
        message: "Sucesso ao Inativar Cliente!",
      };
    } catch (e) {
      throw `erro ao inativar Clientes: ${e}`;
    }
  }
}
