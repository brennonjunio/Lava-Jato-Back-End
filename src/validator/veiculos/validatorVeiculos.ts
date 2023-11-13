import { number, object, string } from "yup";

export const vincularVeiculoSchema = object({
  body: object({
    cd_cliente: string().required("Informar dono do veiculo"),
    placa: string().required("Informar Placa do veiculo").min(7,"A Placa deve conter 7 digitos").max(7,"A Placa deve conter 7 digitos"),
    modelo: string().required("Informar Modelo do veiculo").min(3,"O modelo deve contar no minimo 3 caracteres"),
    cd_tipo_veiculo: number().required('Informar Tipo do veiculo'),
  }),
});
