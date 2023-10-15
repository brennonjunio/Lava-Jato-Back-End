import { array, number, object, string } from "yup";

export const efetuarPagamentoSchema = object({
  body: object({
    pagamentos: array().required("Nome Do cliente é obrigatorio"),
    nr_atendimento_p: number().required(
      "O número de atendimento é obrigatorio"
    ),
    vl_desconto_p: string().required("Valor do desconto é obrigatorio"),
    cd_usuario_p: string().required("O cd usuario é obrigatorio"),
    perc_desc_p: string().required("O percentual de desconto é obrigatorio"),
    dh_vencimento_p: string().required("A data de vencimento é obrigatoria"),
  }),
});
