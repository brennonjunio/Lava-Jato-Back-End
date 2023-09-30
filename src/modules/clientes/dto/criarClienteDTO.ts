import { object, string,number } from "yup";

export interface criarClienteDTO {
  nm_cliente: string;
  cpf_cnpj: string;
  cep: string;
  bairro: string;
  nr_casa: string;
}


export default object({
  nm_cliente: string().required('Nome Do cliente é obrigatorio'),
  cpf_cnpj: string().required('CPF ou CNPJ Do cliente é obrigatorio'),
  cep: string().required('CEP do Cliente é obrigatorio'),
  bairro: string().required('Bairro do Cliente é obrigatorio'),
  nr_casa: string().required('Nr da caaasa do Cliente é obrigatorio'),
});
