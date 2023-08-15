//select gerar_horarios_agenda('2023-08-04','2023-08-04','09:00:00','18:00:00' ); exemplo de chamada ageenda

import db from "../../../database/database";
import { criarAgendaDTO } from "../dto/criarAgendaDTO";

export class agendaRepository {
  async criarAgenda(params: criarAgendaDTO) {
    const result = await db.$queryRawUnsafe(
      "select gerar_horarios_agenda(?,?,?,?)",
      criarAgendaDTO
    );
    return result;
  }
}
