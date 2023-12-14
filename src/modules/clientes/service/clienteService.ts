import { isEmpty, isNull } from "lodash";
import { CriarClienteDTO } from "../dto/criarClienteDTO";
import { updateClienteDTO } from "../dto/updateClienteDTO";
import { ClienteRepository } from "../repository/clientesRepository";
import { useCase } from "../repository/useCase/useCaseClientes";
import AppStatus from "../../../shared/AppStatus";
export class ClienteService {
  private clienteRepository: ClienteRepository = new ClienteRepository();
  private useCaseCliente: useCase = new useCase();

  async salvar(param: CriarClienteDTO) {
    try {
      if (
        !isNull(
          await this.useCaseCliente.validaClienteExistente(param.cpf_cnpj)
        )
      ) {
        return AppStatus.updateFalse("Cpf invalido ou Já cadastrado", 0);
      }
      const result = await this.clienteRepository.criarCliente(param);
      return AppStatus.appSucess("Cliente Cadastrado Com Sucesso!", 1);
    } catch (e) {
      return AppStatus.appError("Erro ao Cadastrar Cliente!", e);
    }
  }

  async atualizar(param: updateClienteDTO) {
    try {
      //se valid for false, quer dizer que o update pode ser o mesmo cpf
      const valid = await this.useCaseCliente.validaClienteUpdate(
        String(param.cpf_cnpj),
        Number(param.cd_cliente)
      );
      if (!valid) {
        return AppStatus.updateFalse("Cpf invalido ou Já cadastrado", 0);
      }
      const data = await this.clienteRepository.atualizarCliente(param);
      return AppStatus.updateSucess("Dados Atualizados Com Sucesso!", 1);
    } catch (e) {
      return AppStatus.appError("Erro ao Editar Cadastro", 0);
    }
  }
  async listar() {
    try {
      const result = await this.clienteRepository.listarClientes();
      return AppStatus.appSucess("Clientes Listados Com Sucesso!", result);
    } catch (e) {
      return AppStatus.appError("Erro ao Listar Clientes", 0);
    }
  }
  async deletar(cd_cliente: number) {
    try {
      if (
        !isNull(await this.useCaseCliente.validaServicoExistente(cd_cliente))
      ) {
        return AppStatus.updateFalse(
          "Não é possivel deletar cliente com serviços",
          0
        );
      }
      const result = await this.clienteRepository.deletarCliente(cd_cliente);
      return AppStatus.deletadoSucess;
    } catch (e) {
      return AppStatus.appError("Erro ao Deletar Cliente", 0);
    }
  }
 
}
