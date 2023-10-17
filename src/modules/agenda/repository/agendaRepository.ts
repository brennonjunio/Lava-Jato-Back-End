
import db from "../../../database/database";
import { criarAgendaDTO } from "../dto/criarAgendaDTO";

export class agendaRepository {
  async criarAgenda(params: criarAgendaDTO) {

    const result = await db.$queryRawUnsafe(
      "select gerar_horarios_agenda(?,?,?,?) as total_horarios",
      params.data_ini,
      params.data_fim,
      params.hora_ini,
      params.hora_fim
    );

    return result;
  }

  async listarHorariosDisponiveis() {
    const result = db.agenda.findMany({where: {status_agenda: "A"}});
    return result;
  }
  async deletarHorarioAgenda(cd_agenda: number) {
    return await db.agenda.delete({ where: { cd_agenda: cd_agenda } });
  }
}
