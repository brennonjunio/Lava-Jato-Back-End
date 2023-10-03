import { isNull } from "lodash";
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
  async validaClienteUpdate(p1:string,p2:number){
    const result = await db.$queryRawUnsafe("select * from clientes where cpf_cnpj =? and cd_cliente = ?",p1,p2)
    if(isNull(result)){
     const a1 =  await this.validaClienteExistente(p1)
     return a1
    }
    return result;
  }
}
