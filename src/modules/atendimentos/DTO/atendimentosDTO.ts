export class FinalizarServico {
  nr_servico_p: number;
  nr_atendimento_p: number;
  constructor(nr_servico_p: number, nr_atendimento_p: number) {
    (this.nr_servico_p = nr_servico_p),
      (this.nr_atendimento_p = nr_atendimento_p);
  }
}
