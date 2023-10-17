import { array, number, object, string } from "yup";
export const criarTipoPagamentoSchema = object({
  body: object({
    descricao: number().required("Informar Descrição do Pagamento"),
    qtd_parcelas: number().required("Informar Quantidade de Parcelas"),
  }),
});
