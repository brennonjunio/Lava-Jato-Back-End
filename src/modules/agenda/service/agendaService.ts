import { criarAgendaDTO } from "../dto/criarAgendaDTO";
import { agendaRepository } from "../repository/agendaRepository";
import { useCaseAgenda } from "../repository/useCase/useCaseAgenda";
export class agendaService {
  private repository: agendaRepository = new agendaRepository();
  private useCase: useCaseAgenda = new useCaseAgenda();

  async criarAgenda(param: criarAgendaDTO) {
    if(await this.useCase.agendaRepetida(String (param.data_ini))){
      throw 'Já existe Horario Gerado para data Escolhida'
    }
    try {

      

      const result = await this.repository.criarAgenda(param);
      return {
        statusCode: 200,
        message: "Sucesso ao Criar Agenda!",
        data: result,
      };
    } catch (e) {

      throw(`erro na Criação da Agenda: ${e}`);
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
      throw(`erro ao Listar Agendas: ${e}`);
  }
  }
  async deletarHorarioAgenda(cd_agenda:number){
    try {
      const result = await this.repository.deletarHorarioAgenda(cd_agenda);
      return {
        statusCode: 201,
        message: "Sucesso Ao Excluir Horario da Agenda",
        data: result,
      };
    } catch (e) {
      throw(`erro ao Excluir Agendas: ${e}`);
  }
  }
}
