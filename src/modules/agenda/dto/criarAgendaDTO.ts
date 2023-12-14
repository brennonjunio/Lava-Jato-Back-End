export class criarAgendaDTO {
  data_ini: Date;
  data_fim: Date;
  hora_ini: string;
  hora_fim: string;
  constructor(
    data_ini: Date,
    data_fim: Date,
    hora_ini: string,
    hora_fim: string
  ) {
    this.data_ini = data_ini;
    this.data_fim = data_fim;
    this.hora_ini = hora_ini;
    this.hora_fim = hora_fim;
  }
}
