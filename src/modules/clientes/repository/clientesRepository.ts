import { criarClienteDTO } from "../dto/clientesDTO";
import db from "../../../database/database";

export class ClienteRepository {
  async criarCliente(param: criarClienteDTO) {
  
    const novoCliente = await db.clientes.create({
      data: param,
    });

    return novoCliente;
  }
  async listarClientes() {
    return await db.clientes.findMany({});
  }
}
