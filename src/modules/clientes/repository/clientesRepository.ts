import { criarClienteDTO, inativarClienteDTO, updateClienteDTO } from "../dto/clientesDTO";
import db from "../../../database/database";

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
        data: param,
      });
      return { status: true, data: result };
    } catch (error) {
      return { error };
    }
  }
  async listarClientes() {
    return await db.clientes.findMany({
      include: {
        veiculos_clientes: {
          select: {
            placa: true,
            modelo: true,
          },
        },
      },
    });
  }

  async deletarCliente(cd_cliente: number) {
    try {
      return await db.clientes.delete({
        where: { cd_cliente: cd_cliente },
      });
    } catch (error) {
      return { message: error };
    }
  }
  async inativarCliente(cd_cliente: number) {
    try {
      const result = await db.clientes.update({
        where: { cd_cliente: cd_cliente },
        data: { status: "I" },
      });
      return { status: true, data: result };
    } catch (error) {
      return { message: `Erro ao Inativar Cliente: ${error}` };
    }
  }
}
