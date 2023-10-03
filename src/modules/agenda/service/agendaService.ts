import { isNull } from "lodash";
import AppStatus from "../../../shared/AppStatus";
import { criarAgendaDTO } from "../dto/criarAgendaDTO";
import { agendaRepository } from "../repository/agendaRepository";
import { useCaseAgenda } from "../repository/useCase/useCaseAgenda";
export class agendaService {
  private repository: agendaRepository = new agendaRepository();
  private useCase: useCaseAgenda = new useCaseAgenda();

  async criarAgenda(param: criarAgendaDTO) {
    if (await this.useCase.agendaRepetida(String(param.data_ini))) {
      return AppStatus.updateFalse(
        "Já existe Horario Gerado para data Escolhida",
        0
      );
    }
    try {
      const result = await this.repository.criarAgenda(param);
      return AppStatus.appSucess("Sucesso ao criar Horario", result);
    } catch (e) {
      return AppStatus.appError("Erro Ao criar Horario", 0);
    }
  }
  async listarAgendasDisponiveis() {
    try {
      const result = await this.repository.listarHorariosDisponiveis();

      return AppStatus.appSucess("Sucesso ao Listar Horarios", result);
    } catch (e) {
      return AppStatus.appError("Erro Ao Listar Horarios", 0);
    }
  }
  async deletarHorarioAgenda(cd_agenda: number) {
    try {
      if (!isNull(await this.useCase.agendaJaUsada(cd_agenda))) {
        return AppStatus.updateFalse(
          "Agenda Usada, Não pode ser excluida",
          cd_agenda
        );
      }
      const result = await this.repository.deletarHorarioAgenda(cd_agenda);

      return AppStatus.updateSucess("Sucesso ao deletar", 1);
    } catch (e) {
      return AppStatus.appError("Erro ao deletar Agenda", 0);
    }
  }
}
