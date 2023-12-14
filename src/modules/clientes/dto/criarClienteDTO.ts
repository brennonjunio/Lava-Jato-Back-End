export class CriarClienteDTO {
  nm_cliente: string;
  cpf_cnpj: string;
  cep: string;
  bairro: string;
  rua: string;
  nr_casa: string;
  telefone1: string;
  telefone2: string;
  cd_usuario: number;
  constructor(
    nm_cliente: string,
    cpf_cnpj: string,
    cep: string,
    bairro: string,
    rua: string,
    nr_casa: string,
    telefone1: string,
    telefone2: string,
    cd_usuario: number
  ) {
    this.nm_cliente = nm_cliente;
    this.cpf_cnpj = cpf_cnpj;
    this.cep = cep;
    this.bairro = bairro;
    this.rua = rua;
    this.nr_casa = nr_casa;
    this.telefone1 = telefone1;
    this.telefone2 = telefone2;
    this.cd_usuario = cd_usuario;
  }
}
