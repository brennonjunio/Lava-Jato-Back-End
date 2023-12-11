import { isEmpty } from "lodash";
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
      select: { nr_sequencia: true },
      where: { cd_veiculo: param },
    });
    return result;
  }
  async validaPlacaUpdate(p1: string, p2: number) {
    const a = await db.$queryRawUnsafe(
      "select * from veiculos_clientes where placa =? and cd_cliente =?",
      p1,
      p2
    );

    if (isEmpty(a)) {
      const b = await this.uniquePlaca(p1);
      if (!isEmpty(b)) {
        return false;
      }
    }
    return true;
  }
  async validaTipoUsado(param: number) {
    return await db.veiculos_clientes.findFirst({
      where: {
        cd_tipo_veiculo: param,
      },
    });
  }
}
