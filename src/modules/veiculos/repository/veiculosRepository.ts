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
}
