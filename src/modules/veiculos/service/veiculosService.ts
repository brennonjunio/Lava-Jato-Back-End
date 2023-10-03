import { updateVeiculoClienteDTO, veiculoClienteDTO } from "../dto/veiculosDTO";
import { veiculosRepository } from "../repository/veiculosRepository";
import { useCaseVeiculos } from "../repository/useCase/usecaseVeiculos";
import AppStatus from "../../../shared/AppStatus";
import { isEmpty, isNull } from "lodash";

export class veiculoService {
  private repositorioVeiculos: veiculosRepository = new veiculosRepository();
  private useCase: useCaseVeiculos = new useCaseVeiculos();

  async criarTipoVeiculo(descricao: string) {
    try {
      const result = await this.repositorioVeiculos.tipoVeiculoCriar(descricao);

      return AppStatus.appSucess("Sucesso Ao criar", descricao);
    } catch (e) {
      return AppStatus.appError("Erro ao Criar", 0);
    }
  }
  async listarTipoVeiculo() {
    try {
      const result = await this.repositorioVeiculos.tipoVeiculoListar();
      return AppStatus.appSucess("Sucesso Ao Listar Tipos", result);
    } catch (e) {
      return AppStatus.appError("Erro ao Listar Tipos", 0);
    }
  }
  async editarTipoVeiculo(cd_tipo_veiculo: number, descricao: any) {
    try {
      const result = await this.repositorioVeiculos.tipoVeiculoEditar(
        cd_tipo_veiculo,
        descricao
      );
      return AppStatus.updateSucess("Sucesso ao Editar", descricao);
    } catch (e) {
      return AppStatus.appError("Erro ao Editar", 0);
    }
  }
  async deletarTipoVeiculo(cd_tipo_veiculo: number) {
    try {
      const result = await this.repositorioVeiculos.tipoVeiculoDeletar(
        cd_tipo_veiculo
      );
      return AppStatus.deletadoSucess;
    } catch (e) {
      return AppStatus.appError("Erro ao Deletar", 0);
    }
  }
  async criarVeiculoCLiente(param: veiculoClienteDTO) {
    try {
      if (!isNull(await this.useCase.uniquePlaca(param.placa))) {
        return AppStatus.updateFalse("Placa de veiculo Já usada", 0);
      }
      const result = await this.repositorioVeiculos.veiculoClienteCriar(param);
      return AppStatus.appSucess("Veiculo Cadastrado Com sucesso!", 1);
    } catch (e) {
      return AppStatus.appError("Erro ao Vincular Veiculo", 0);
    }
  }
  async listarVeiculosCliente(): Promise<any> {
    try {
      const result = await this.repositorioVeiculos.listarVeiculosCliente();
      if (isEmpty(result)) {
        return AppStatus.arrayVazio;
      }
      return AppStatus.appSucess("veiculos Listados Com Sucesso!", result);
    } catch (e) {
      return AppStatus.appError("Erro ao Listar Veiculos", 0);
    }
  }
  async listarVeiculosPorCliente(cd_Cliente: number) {
    try {
      const result = await this.repositorioVeiculos.listarVeiculosPorCliente(
        cd_Cliente
      );
      if (isEmpty(await result)) {
        return AppStatus.arrayVazio;
      }
      return AppStatus.appSucess("veiculos Listados Com Sucesso!", result);
    } catch (e) {
      return AppStatus.appError("Erro ao Listar Veiculos", 0);
    }
  }
  async atualizarVeiculosCliente(param: updateVeiculoClienteDTO) {
    try {
      if (!isNull(await this.useCase.uniquePlaca(param.placa))) {
        return AppStatus.updateFalse("Placa de veiculo Já usada", 0);
      }
      const result = await this.repositorioVeiculos.atualizarVeiculosCliente(
        param
      );
      return AppStatus.updateSucess("Sucesso ao Editar Veiculo!", 1);
    } catch (e) {
      return AppStatus.appError("Erro ao Editar Veiculo", 0);
    }
  }
  async deletarVeiculosCliente(cd_veiculo: number) {
    try {
      if (!isNull(await this.useCase.usado(cd_veiculo))) {
        return AppStatus.updateFalse("Veiculo com serviços vinculados", 0);
      }
      const result = await this.repositorioVeiculos.deletarVeiculosCliente(
        cd_veiculo
      );
      return AppStatus.deletadoSucess;
    } catch (e) {
      return AppStatus.appError("Erro ao Deletar veiculo", 0);
    }
  }
}
