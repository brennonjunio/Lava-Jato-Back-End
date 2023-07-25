import { criarClienteDTO, updateClienteDTO } from "../dto/clientesDTO";
import db from "../../../database/database";
import { json } from "stream/consumers";
import { timeStamp } from "console";

export class ClienteRepository {
  async criarCliente(param: criarClienteDTO) {
    const novoCliente = await db.clientes.create({
      data: param,
    });

    return novoCliente;
  }
  async atualizarCliente(param: updateClienteDTO) {
    try {
     const result = await db.clientes.update({
        where: { cd_cliente: param.cd_cliente },
        data: param ,
      });
      return { status: true, data: result };
    } catch (error) {
      return { error };
    }
  }
  async listarClientes() {
    return await db.clientes.findMany({});
  }
}
