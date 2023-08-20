import db from "../../../../database/database";

export class useCaseVeiculos {
  async uniquePlaca(placa: string) {
    const result = await db.veiculos_clientes.findFirst({
      where: { placa: placa },
    });
    return result;
  }
}
