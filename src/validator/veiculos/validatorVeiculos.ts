import { number, object, string } from "yup";

export const vincularVeiculoSchema = object({
  body: object({
    cd_cliente: string().required("Informar dono do veiculo"),
    placa: string().required("Informar Placa do veiculo"),
    modelo: string().required("Informar Modelo do veiculo"),
    cd_tipo_veiculo: number().required('Informar Tipo do veiculo'),
  }),
});
