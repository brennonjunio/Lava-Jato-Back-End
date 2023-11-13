import { array, number, object, string } from "yup";
 
export const finalizarServicoSchema = object({
    body: object({
        nr_servico_p: array().required("A Sequencia do serviço é obrigatorio"),
        nr_atendimento_p: string().required("A Sequencia do Atendimento é obrigatorio")
    }),
  });

  export const criarServicoSchema = object({
    body: object({
        desc_servico: string().required("Informar Descrição do Serviço").min(4,'descrição de no minimo 4 caracteres'),
        vlr_servico: string().required("Informar Valor do serviço")
    }),
  });