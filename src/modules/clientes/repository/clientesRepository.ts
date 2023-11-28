import db from "../../../database/database";
import { CriarClienteDTO } from "../dto/criarClienteDTO";
import { updateClienteDTO } from "../dto/updateClienteDTO";

export class ClienteRepository {
  async criarCliente(param: CriarClienteDTO) {
    const novoCliente = await db.clientes.create({
      data: param,
    });

    return novoCliente;
  }
  async atualizarCliente(param: updateClienteDTO) {
    const result = await db.clientes.update({
      where: { cd_cliente: param.cd_cliente },
      data: param,
    });
    return result;
  }
  async listarClientes() {
    return await db.clientes.findMany({
      orderBy:{cd_cliente: 'desc'},
      include: {
        veiculos_clientes: {
          select: {
            cd_veiculo: true,
            placa: true,
            modelo: true,
          },
        },
      },
    });
  }

  async deletarCliente(cd_cliente: number) {
    const result = await db.clientes.delete({
      where: { cd_cliente: cd_cliente },
    });
    return result;
  }

}
