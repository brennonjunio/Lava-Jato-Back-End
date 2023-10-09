import { array, number, object, string } from "yup";
 
export const finalizarServicoSchema = object({
    body: object({
        nr_servico_p: string().required("A Sequencia do serviço é obrigatorio"),
        nr_atendimento_p: string().required("A Sequencia do Atendimento é obrigatorio")
    }),
  });

export const agendarServicoSchema = object({
    body: object({
        cd_servico_p: array().required("O Codigo do serviço é obrigatorio"),
        cd_agenda_p: number().required(),
        cd_cliente_p: number().required(),
        cd_veiculo_p: number().required(),
        placa_p: string().required(),
        cd_usuario_p: number().required(),
    })
})