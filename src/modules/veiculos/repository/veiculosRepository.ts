import db from "../../../database/database";

export class veiculosRepository {
  async tipoVeiculoCriar(descricao: any) {
    const result = await db.tipo_veiculos.create({
      data: descricao,
    });
    return result;
  }
  async tipoVeiculoListar() {
    return await db.tipo_veiculos.findMany({});
  }
  async tipoVeiculoEditar(cd_tipo_veiculo: number,descricao: any) {
    const result = await db.tipo_veiculos.update({
      where: { cd_tipo_veiculo: cd_tipo_veiculo },
      data: {descricao: descricao},
    });
    return result;
  }
}
