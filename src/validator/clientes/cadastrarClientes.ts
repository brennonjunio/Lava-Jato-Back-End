import { number, object, string } from "yup";

export default object({
  body: object({
    nm_cliente: string()
      .required("Nome Do cliente é obrigatorio")
      .min(4, "O nome do cliente deve ter no minimo 4 caracteres")
      .max(100, "O nome do cliente ultrapassou  a quantidade de caracteres"),
    cpf_cnpj: string()
      .required("CPF ou CNPJ Do cliente é obrigatorio")
      .min(11, "CPF/CNPJ deve possuir no minimo 11 caracteres")
      .max(14, "CPF/CNPJ deve possuir no maximo 14 caracteres"),
    cep: string()
      .required("CEP do Cliente é obrigatorio")
      .min(8, "O CEP deve conter no minimo 8 caracteres")
      .max(8, "O CEP deve conter no Maximo 8 caracteres"),
    bairro: string()
      .required("Bairro do Cliente é obrigatorio")
      .min(4)
      .max(100),
    rua: string().required("Rua do Cliente é obrigatorio").min(4).max(100),
    nr_casa: string()
      .required("Nr da casa do Cliente é obrigatorio")
      .min(1)
      .max(10),
    telefone1: string()
      .required("Ao menos um telefone é Obrigatorio")
      .min(8, "Digite os 8 digitos de seu telefone")
      .max(14, "Número de telefone invalido"),
    telefone2: string(),
    cd_usuario: number()
  }),
});
