import { isEmpty } from "lodash";
import db from "../../../../database/database";
import { vinculoVeiculoServico } from "../../dto/servicosDTO";

export class UseCaseService {
  async validaServicoUsado(params: number) {
    return await db.servicos_atendimento.findFirst({
      where: { cd_servico: params },
      select: { cd_servico: true },
    });
  }
  async validaTipoVeiculoServico(params:vinculoVeiculoServico) {
    const validations = [] as any;
  
    for await (let i of params.cd_servico) {
      const validate = await db.$queryRawUnsafe(
        `select
            a.nr_sequencia ,
            b.cd_servico ,  
            b.desc_servico  servico,
            c.cd_tipo_veiculo,
            c.descricao veiculo
          from
            veiculos_servico a
          join servicos b on
            b.cd_servico = a.cd_servico
          join tipo_veiculos c 
          on c.cd_tipo_veiculo  = a.cd_tipo_veiculo  where a.cd_tipo_veiculo  = ? and b.cd_servico =? `,
        params.cd_tipo_veiculo,
        i
      );
        
    await validations.push(validate);
    }
    console.log(validations)
    if(!isEmpty(validations)){
      console.log('caiu aqui')
      return validations;
    }
    return;
  }
}
