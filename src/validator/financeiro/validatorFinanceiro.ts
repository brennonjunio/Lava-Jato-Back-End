import { array, number, object, string } from "yup";
export const criarTipoPagamentoSchema = object({
  body: object({
    descricao: string().required("Informar Descrição do Pagamento").min(4,"Descrição de no minimo 4 caracteres"),
    qtd_parcelas: number().required("Informar Quantidade de Parcelas"),
  }),
  
});
export const adicionarMovimentacao = object({
  body: object({
    nr_seq_financeiro_p: number(),
    cd_tipo_pagamento_p: number().required('Informar Forma de pagamento'),
    valor: number().required('Informar valor'),
    cd_usuario_p: number().required('Informar codigo de usuario'),
    direcao: number().required('Informar direção da movimentacao'),
    observacao: string()
  }),
  
});
