import { updateVeiculoClienteDTO, veiculoClienteDTO } from "../dto/veiculosDTO";
import { veiculosRepository } from "../repository/veiculosRepository";
import { useCaseVeiculos } from "../repository/useCase/usecaseVeiculos";
export class veiculoService {
  private repositorioVeiculos: veiculosRepository = new veiculosRepository();
  private useCase: useCaseVeiculos = new useCaseVeiculos();
  async criarTipoVeiculo(descricao: string) {
    try {
      const result = await this.repositorioVeiculos.tipoVeiculoCriar(descricao);

      return {
        status: true,
        statusCode: 200,
        message: "Sucesso ao Criar Tipos de veiculos!",
        data: result,
      };
    } catch (e) {
      throw `erro na Criação dos tipos de veiculos: ${e}`;
    }
  }
  async listarTipoVeiculo() {
    try {
      const result = await this.repositorioVeiculos.tipoVeiculoListar();
      return {
        status: true,
        statusCode: 200,
        message: "Sucesso ao Listar Tipos de veiculos!",
        data: result,
      };
    } catch (e) {
      throw `erro ao listar tipos de veiculos: ${e}`;
    }
  }
  async editarTipoVeiculo(cd_tipo_veiculo: number, descricao: any) {
    try {
      const result = await this.repositorioVeiculos.tipoVeiculoEditar(
        cd_tipo_veiculo,
        descricao
      );
      return {
        status: true,
        statusCode: 201,
        message: "Sucesso Editar Tipos Veiculos!",
        data: result,
      };
    } catch (e) {
      throw `erro ao editor Tipos veiculos: ${e}`;
    }
  }
  async deletarTipoVeiculo(cd_tipo_veiculo: number) {
    try {
      const result = await this.repositorioVeiculos.tipoVeiculoDeletar(
        cd_tipo_veiculo
      );
      return {
        status: true,
        statusCode: 200,
        message: "Sucesso Editar Tipos Veiculos!",
        data: result,
      };
    } catch (e) {
      throw `erro ao editor Tipos veiculos: ${e}`;
    }
  }
  async criarVeiculoCLiente(param: veiculoClienteDTO) {
    if (await this.useCase.uniquePlaca(param.placa)) {
      throw `Placa de veiculo Já vinculada`
     }
    try {
      const result = await this.repositorioVeiculos.veiculoClienteCriar(param);
      return {
        status: true,
        statusCode: 200,
        message: "Sucesso ao Adicionar Veiculo!",
        data: result,
      };
    } catch (e) {
      throw `erro ao Adicionar Veiculo: ${e}`;
    }
  }
  async listarVeiculosCliente() {
    try {
      const result = await this.repositorioVeiculos.listarVeiculosCliente();
      return {
        status: true,
        statusCode: 200,
        message: "Sucesso ao listar veiculos do Cliente!",
        data: result,
      };
    } catch (e) {
      throw `erro ao listar veiculos do cliente ${e}`;
    }
  }
  async listarVeiculosPorCliente(cd_Cliente: number) {
    try {
      const result = await this.repositorioVeiculos.listarVeiculosPorCliente(cd_Cliente);
      return {
        status: true,
        statusCode: 200,
        message: "Sucesso ao listar veiculos do Cliente!",
        data: result,
      };
    } catch (e) {
      throw `erro ao listar veiculos do cliente ${e}`;
    }
  }
  async atualizarVeiculosCliente(param: updateVeiculoClienteDTO) {
    try {
      const result = await this.repositorioVeiculos.atualizarVeiculosCliente(
        param
      );
      return {
        status: true,
        statusCode: 202,
        message: "Sucesso ao editar veiculo do Cliente!",
        data: result,
      };
    } catch (e) {
      throw `erro ao editar veiculo do Cliente ${e}`;
    }
  }
  async deletarVeiculosCliente(cd_veiculo: number) {
    try {
      const result = await this.repositorioVeiculos.deletarVeiculosCliente(
        cd_veiculo
      );
      return {
        status: true,
        statusCode: 200,
        message: "Sucesso ao Deletar Veiculo do Cliente!",
        data: result,
      };
    } catch (e) {
      throw `erro Erro ao Deletar Veiculo do Cliente: ${e}`;
    }
  }
}
