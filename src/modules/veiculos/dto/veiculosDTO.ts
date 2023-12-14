export class veiculoClienteDTO {
  cd_cliente: number;
  placa: string;
  modelo: string;
  cd_tipo_veiculo: number;

  constructor(cd_cliente: number, placa: string, modelo: string, cd_tipo_veiculo: number) {
    this.cd_cliente = cd_cliente;
    this.placa = placa;
    this.modelo = modelo;
    this.cd_tipo_veiculo = cd_tipo_veiculo;
  }
}

export class updateVeiculoClienteDTO {
  cd_veiculo: number;
  cd_cliente: number;
  placa: string;
  modelo: string;
  cd_tipo_veiculo: number;
  constructor(cd_veiculo:number,cd_cliente: number, placa: string, modelo: string, cd_tipo_veiculo: number) {
    this.cd_veiculo = cd_veiculo;
    this.cd_cliente = cd_cliente;
    this.placa = placa;
    this.modelo = modelo;
    this.cd_tipo_veiculo = cd_tipo_veiculo;
  }
}
