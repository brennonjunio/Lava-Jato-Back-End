import { isEmpty } from "lodash";
import {
  filtrosFinanceiros,
  filtrosTransacoes,
} from "../dto/movimentacaoFinanceiraDTO";
export const filtrosTransacoesParams = (params: filtrosTransacoes) => {
  const atend = !isEmpty(params.nr_atendimento)
    ? `\nand nr_atendimento = ${params.nr_atendimento}`
    : "";
  const fin = !isEmpty(params.nr_seq_financeiro)
    ? `\nand nr_seq_financeiro = ${params.nr_seq_financeiro}`
    : "";
  const tipo = !isEmpty(params.tipo)
    ? `\nand tipo_pagamento like'%${params.tipo}%'`
    : "";
  const sql = `${atend} ${fin} ${tipo}`;
  return sql;
};

export const filtrosFinanceiroParams = (params: filtrosFinanceiros) => {
  const atend = !isEmpty(params.nr_atendimento)
    ? `\nand nr_atendimento = ${params.nr_atendimento}`
    : "";
  const fin = !isEmpty(params.nr_seq_financeiro)
    ? `\nand seq_financeiro = ${params.nr_seq_financeiro}`
    : "";
  const status = !isEmpty(params.status)
    ? `\nand status ='${params.status}'  COLLATE utf8mb4_general_ci`
    : "";
  const cliente = !isEmpty(params.cliente)
    ? `\nand cliente like '%${params.cliente}%' COLLATE utf8mb4_general_ci`
    : "";
  const sql = `${atend} ${fin} ${status} ${cliente}`;
  return sql;
};
