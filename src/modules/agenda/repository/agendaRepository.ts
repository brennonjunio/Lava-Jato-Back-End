
import db from "../../../database/database";
import { criarAgendaDTO } from "../dto/criarAgendaDTO";

export class agendaRepository {
  async criarAgenda(params: criarAgendaDTO) {
//select gerar_horarios_agenda('2023-08-04','2023-08-04','09:00:00','18:00:00' ); exemplo de chamada ageenda

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
    const result = db.agenda.findMany({});
    return result;
  }
  async deletarHorarioAgenda(cd_agenda: number) {
    return await db.agenda.delete({ where: { cd_agenda: cd_agenda } });
  }
}
