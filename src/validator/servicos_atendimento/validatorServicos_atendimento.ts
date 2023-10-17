import { array, number, object, string } from "yup";
 
export const finalizarServicoSchema = object({
    body: object({
        nr_servico_p: string().required("A Sequencia do serviço é obrigatorio"),
        nr_atendimento_p: string().required("A Sequencia do Atendimento é obrigatorio")
    }),
  });