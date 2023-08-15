import { criarClienteDTO, updateClienteDTO } from "../dto/clientesDTO";
import { ClienteRepository } from "../repository/clientesRepository";
export class ClienteService {
  private clienteRepository: ClienteRepository = new ClienteRepository();

  async salvar(param: criarClienteDTO) {
    try {
      const salvarCliente = await this.clienteRepository.criarCliente(param);

      return salvarCliente;
    } catch (e) {
      throw(`erro no cadastro de Clientes: ${e}`);
  }
  }

  async atualizar(param: updateClienteDTO) {
    try {
      const data = await this.clienteRepository.atualizarCliente(param);

      return {
        statusCode: 204,
        message: "Sucesso ao Atualizar cadastro do Cliente!",
        data: [data],
      };
    } catch (e) {
      throw(`erro ao Atualizar Cadastro: ${e}`);
  }
  }
  async listar() {
    try {
      return await this.clienteRepository.listarClientes();
    } catch (e) {
      throw(`erro ao listar Clientes: ${e}`);
  }
  }
  async deletar(cd_cliente: number) {
    try {
      const result = await this.clienteRepository.deletarCliente(cd_cliente);
      return {
        statusCode: 200,
        status: true,
        data: result,
        message: 'Sucesso ao deletar Cliente!',
    };
  } catch (e) {
    throw(`erro ao Deletar Clientes: ${e}`);
}
  }
  async inativar(cd_cliente:number){
    try {
       const result = await this.clienteRepository.inativarCliente(cd_cliente)
       return {
        statusCode: 200,
        status: true,
        data: result,
        message: 'Sucesso ao Inativar Cliente!',
    };
  } catch (e) {
    throw(`erro ao inativar Clientes: ${e}`);
}
  }
}
