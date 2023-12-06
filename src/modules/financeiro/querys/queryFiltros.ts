import { isEmpty } from "lodash"
import { filtrosTransacoes } from "../dto/movimentacaoFinanceiraDTO"
export  const filtrosTransacoesParams = (params: filtrosTransacoes) =>{
    const atend = !isEmpty(params.nr_atendimento) ? `\nand nr_atendimento = ${params.nr_atendimento}` :''
    const fin =   !isEmpty(params.nr_seq_financeiro) ? `\nand nr_seq_financeiro = ${params.nr_seq_financeiro}`:''
    const tipo = !isEmpty(params.tipo) ? `\nand tipo_pagamento like'%${params.tipo}%'`: ''
    const sql = `${atend} ${fin} ${tipo}`
    return sql;
}
export  const filtrosFinanceiroParams = (params: filtrosTransacoes) =>{
    const atend = !isEmpty(params.nr_atendimento) ? `\nand nr_atendimento = ${params.nr_atendimento}` :''
    const fin =   !isEmpty(params.nr_seq_financeiro) ? `\nand nr_seq_financeiro = ${params.nr_seq_financeiro}`:''
    const tipo = !isEmpty(params.tipo) ? `\nand tipo_pagamento like'%${params.tipo}%'`: ''
    const sql = `${atend} ${fin} ${tipo}`
    return sql;
}