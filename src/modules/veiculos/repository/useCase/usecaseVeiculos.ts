import db from "../../../../database/database";

export class useCaseVeiculos {
  async uniquePlaca(placa: string) {
    const result = await db.veiculos_clientes.findFirst({
      where: { placa: placa },
    });
    return result;
  }
  async usado(param: number) {
    const result = await db.servicos_atendimento.findFirst({
      select:{nr_sequencia:true},
      where: { cd_veiculo: param },
    });
    return result;
  }
}
