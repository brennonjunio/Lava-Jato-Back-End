import db from "../../../database/database";
import { updateVeiculoClienteDTO, veiculoClienteDTO } from "../dto/veiculosDTO";

export class veiculosRepository {
  async tipoVeiculoCriar(descricao: any) {
    const result = await db.tipo_veiculos.create({
      data: descricao,
    });
      const cd_tipo_veiculo = await db.$queryRawUnsafe('select cd_tipo_veiculo  from tipo_veiculos tv  order by cd_tipo_veiculo desc  limit 1 ') as any
    return cd_tipo_veiculo[0].cd_tipo_veiculo;
  }
  async tipoVeiculoListar() {
    return await db.tipo_veiculos.findMany({});
  }
  async tipoVeiculoEditar(cd_tipo_veiculo: number, descricao: any) {
    const result = await db.tipo_veiculos.update({
      where: { cd_tipo_veiculo: cd_tipo_veiculo },
      data: { descricao: descricao },
    });
    return result;
  }
  async tipoVeiculoDeletar(cd_tipo_veiculo: number) {
    await db.tipo_veiculos.delete({
      where: { cd_tipo_veiculo: cd_tipo_veiculo },
    });

    return { message: "Excluido Com sucesso" };
  }
  async veiculoClienteCriar(param: veiculoClienteDTO) {
    const result = await db.veiculos_clientes.create({
      data: param,
    });
    return result;
  }

  async listarVeiculosCliente() {
    const result = await db.veiculos_clientes.findMany({
      include: {
        tipo_veiculos: {
          select: {
            descricao: true,
          },
        },
      },
    });
    return result;
  }
  async listarVeiculosPorCliente(cd_cliente_p: number) {
    const result = await db.veiculos_clientes.findMany({
      where:{cd_cliente: cd_cliente_p},
      include: {
        tipo_veiculos: {
          select: {
            descricao: true,
          },
        },
      },
    });
    return result;
  }

  async atualizarVeiculosCliente(param: updateVeiculoClienteDTO) {
    const result = await db.veiculos_clientes.update({
      where: { cd_veiculo: param.cd_veiculo },
      data: param,
    });
    return result;
  }

  async deletarVeiculosCliente(cd_veiculo: number) {
    const result = await db.veiculos_clientes.delete({
      where: { cd_veiculo: cd_veiculo },
    });
    return result;
  }
}
