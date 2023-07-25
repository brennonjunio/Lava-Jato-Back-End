import { criarClienteDTO, updateClienteDTO } from "../dto/clientesDTO";
import { ClienteRepository } from "../repository/clientesRepository";
export class ClienteService {
  private clienteRepository: ClienteRepository = new ClienteRepository();

  async salvar(param: criarClienteDTO) {
    try {
      const salvarCliente = await this.clienteRepository.criarCliente(param);

      return salvarCliente;
    } catch (error) {
      throw error;
    }
  }

  async atualizar(param: updateClienteDTO) {
    try {
     const data =   await this.clienteRepository.atualizarCliente(param);

       return { statusCode: 204, message: 'Sucesso ao Atualizar cadastro do Cliente!', data: [data] };

      
    } catch (error) {
      return { error };
    }
  }
  async listar() {
    try {
      return await this.clienteRepository.listarClientes();
    } catch (error) {}
  }
}
