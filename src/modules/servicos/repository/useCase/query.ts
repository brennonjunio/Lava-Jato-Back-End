import { isEmpty } from "lodash";
import { FiltroListagem } from "../../dto/servicosDTO";

export const listagemFiltros = (p: FiltroListagem)=>{
    const service =  !isEmpty(p.servico) ? `\nand a.cd_servico = '${p.servico}' or desc_servico like '%${p.servico}%'`:''
    const vei = !isEmpty(p.veiculo) ? `\nand a.cd_tipo_veiculo  = '${p.veiculo}' or c.descricao  like '%${p.veiculo}%'`:''
    const sql = `${service} ${vei}`
    return sql;
}