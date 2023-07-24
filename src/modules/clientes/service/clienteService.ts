import { response } from "express";
import { criarClienteDTO } from "../dto/clientesDTO";
import { ClienteRepository } from "../repository/clientesRepository";
import db from "../../../database/database";
export class ClienteService {
  private clienteRepository: ClienteRepository = new ClienteRepository();

  async salvar(param: criarClienteDTO) {
    try {
      const validaCliente = await db.clientes.findFirst({
        where:{ cpf_cnpj: param.cpf_cnpj}
      })
      if(!validaCliente){
        throw new Error(`Cpf/Cnpj Já Cadastrado `)
      }
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
