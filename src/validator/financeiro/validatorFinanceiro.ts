import { array, number, object, string } from "yup";
export const criarTipoPagamentoSchema = object({
  body: object({
    descricao: string().required("Informar Descrição do Pagamento").min(4,"Descrição de no minimo 4 caracteres"),
    qtd_parcelas: number().required("Informar Quantidade de Parcelas"),
  }),
});
