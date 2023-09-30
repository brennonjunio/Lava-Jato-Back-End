import db from "../../../../database/database";

export class useCase {
  async validaClienteExistente(cpf_cnpj: string) {
    const result = await db.clientes.findFirst({
      where: { cpf_cnpj: cpf_cnpj },
    });
    return result;
  }
  async validaServicoExistente(cd_cliente_p: number) {
    return await db.atendimentos.findFirst({
      where: { cd_cliente: cd_cliente_p },
    });
  }
}
