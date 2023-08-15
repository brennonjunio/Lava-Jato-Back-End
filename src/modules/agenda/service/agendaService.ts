import { criarAgendaDTO } from "../dto/criarAgendaDTO";
import { agendaRepository } from "../repository/agendaRepository";
export class agendaService {
  private repository: agendaRepository = new agendaRepository();
  async agendarLavagem(param: criarAgendaDTO) {
    try {
      const result = await this.repository.criarAgenda(param);

      return {
        statusCode: 200,
        message: "Sucesso ao Criar Agenda!",
        data: result,
      };
    } catch (e) {
      return {
        statusCode: 500,
        message: `Error: ${e}`,
        data: [],
      };
    }
  }
  async listarAgendasDisponiveis() {
    try {
      const result = await this.repository.listarHorariosDisponiveis();

      return {
        statusCode: 200,
        message: "Sucesso ao Listar Agendas!",
        data: result,
      };
    } catch (e) {
      return {
        statusCode: 500,
        message: `Error: ${e}`,
        data: [],
      };
    }
  }
}
