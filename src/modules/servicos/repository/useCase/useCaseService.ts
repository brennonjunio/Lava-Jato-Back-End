import db from "../../../../database/database";

export class UseCaseService{
    async validaServicoUsado(cd_servico_p:number){
        await db.servicos_atendimento.findFirst({
            where:{cd_servico:cd_servico_p}
        })
    }
}