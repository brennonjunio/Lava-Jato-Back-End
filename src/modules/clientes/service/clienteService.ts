import { isNull } from "lodash";
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
      return AppStatus.appSucess("Cliente Cadastrado Com Sucesso!", result);
    } catch (e) {
      return AppStatus.appError("Erro ao Cadastrar Cliente!", 0);
    }
  }

  async atualizar(param: updateClienteDTO) {
    try {
      if (param.cpf_cnpj) {
        if (
          !isNull(
            await this.useCaseCliente.validaClienteExistente(param.cpf_cnpj)
          )
        ) {
          return AppStatus.updateFalse("Cpf invalido ou Já cadastrado", 0);
        }
      }

      const data = await this.clienteRepository.atualizarCliente(param);

      return AppStatus.appSucess("Dados Atualizados Com Sucesso!", param);
    } catch (e) {
      return AppStatus.appError("Erro ao Editar Cadastro", 0);
    }
  }
  async listar() {
    try {
      const result = await this.clienteRepository.listarClientes();
      return AppStatus.appSucess("Cliente Cadastrado Com Sucesso!", result);
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
      console.log("🚀 ~ file: clienteService.ts:67 ~ ClienteService ~ deletar ~ e:", e)
      return AppStatus.appError("Erro ao Deletar Cliente", 0);
    }
  }
  async inativar(cd_cliente: number) {
    try {
      const result = await this.clienteRepository.inativarCliente(cd_cliente);
      return AppStatus.appSucess("Cliente Inativado Com Sucesso!", 1);
    } catch (e) {
      return AppStatus.appError("Erro ao Inativar Cliente", 0);
    }
  }
}
