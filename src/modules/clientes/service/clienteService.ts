import { criarClienteDTO } from "../dto/clientesDTO";
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
  async listar() {
    try {
       return await this.clienteRepository.listarClientes();
    
    } catch (error) {}
  }
}
