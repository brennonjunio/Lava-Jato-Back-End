import { object, string } from "yup";

export default object({
  body: object({
    nm_cliente: string().required("Nome Do cliente é obrigatorio"),
    cpf_cnpj: string().required("CPF ou CNPJ Do cliente é obrigatorio"),
    cep: string().required("CEP do Cliente é obrigatorio"),
    bairro: string().required("Bairro do Cliente é obrigatorio"),
    rua: string().required("Rua do Cliente é obrigatorio"),
    nr_casa: string().required("Nr da casa do Cliente é obrigatorio"),
    telefone1: string().required("Ao menos um telefone é Obrigatorio"),
    telefone2: string(),


  }),
});
