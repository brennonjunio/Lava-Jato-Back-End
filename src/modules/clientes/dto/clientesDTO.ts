export class criarClienteDTO {
  nm_cliente: string;
  cpf_cnpj: string;
  cep: string;
  bairro: string;
  nr_casa: string;
}
export class updateClienteDTO {
  nm_cliente: string;
  cpf_cnpj: string;
  cep: string;
  bairro: string;
  nr_casa: string;
  cd_cliente: number;
  status?: string;
}
export class inativarClienteDTO{
  cd_cliente: number;
  status: string;
}