import db from "../../../../database/database";

export class useCaseAgendamento {
  async verificaAgendaOcupada(cd_agenda: number) {
    const result = await db.servicos_agendados.findFirst({
      where: { cd_agenda: cd_agenda },
    });
    return result;
  }
}
