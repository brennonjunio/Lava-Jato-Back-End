import db from "../../../../database/database";

export class useCaseAgendamento {
  async verificaAgendaOcupada(cd_agenda: number) {
    const result = await db.atendimentos.findFirst({
      where: { cd_agenda: cd_agenda },
    });
    return result;
  }
}
