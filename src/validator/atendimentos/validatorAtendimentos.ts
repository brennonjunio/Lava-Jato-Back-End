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
export const criarAtendimentoSchema = object({
  body: object({
    cd_servico_p: array().required("Serviços São Obrigatorios"),
    horario_p: string().required("O horario é obrigatorio"),
    cd_cliente_p: string().required("Informar Cliente"),
    cd_veiculo_p: string().required("Informar Veiculo"),
    placa_p: string().required("Informar Placa Veiculo"),
    cd_usuario_p: string().required("Informar Usuario"),
  }),
});
export const finalizarAtendimentoSchema = object({
  params: object({
    nr_atendimento_p: number().required("Informar Nr Atendimento"),
  }),
});
