import { veiculoClienteDTO } from "../dto/veiculosDTO";
import { veiculosRepository } from "../repository/veiculosRepository";
export class veiculoService {
  private repositorioVeiculos: veiculosRepository = new veiculosRepository();
  async criarTipoVeiculo(descricao: string) {
    try {
      const criarTipoVeiculo = await this.repositorioVeiculos.tipoVeiculoCriar(
        descricao
      );

      return {
        statusCode: 200,
        message: "Sucesso ao Atualizar cadastro do Cliente!",
        data: [criarTipoVeiculo],
      };
    } catch (error) {
      return { message: error };
    }
  }
  async listarTipoVeiculo() {
    try {
      return await this.repositorioVeiculos.tipoVeiculoListar();
    } catch (e) {
      return {
        statusCode: 500,
        message: `Error: ${e}`,
        data: [],
      };
    }
  }
  async editarTipoVeiculo(cd_tipo_veiculo: number, descricao: any) {
    try {
      const result = await this.repositorioVeiculos.tipoVeiculoEditar(
        cd_tipo_veiculo,
        descricao
      );
      return {
        statusCode: 200,
        message: "Sucesso ao Atualizar cadastro do Cliente!",
        data: [result],
      };
    } catch (e) {
      return {
        statusCode: 500,
        message: `Error: ${e}`,
        data: [],
      };
    }
  }
  async deletarTipoVeiculo(cd_tipo_veiculo: number) {
    try {
      const result = await this.repositorioVeiculos.tipoVeiculoDeletar(
        cd_tipo_veiculo
      );
      return {
        statusCode: 200,
        message: "Sucesso ao Excluir Tipo Veiculo!",
        data: [result],
      };
    } catch (e) {
      return {
        statusCode: 500,
        message: `Error: ${e}`,
        data: [],
      };
    }
  }
  async criarVeiculoCLiente(param: veiculoClienteDTO) {
    try {
      const result = await this.repositorioVeiculos.veiculoClienteCriar(param);
      return {
        statusCode: 200,
        message: "Sucesso ao vincular o Veiculo ao cliente",
        data: [result],
      };
    } catch (e) {
      return {
        statusCode: 500,
        message: `Error: ${e}`,
        data: ['Erro no Service'],
      };
    }
  }
  async listarVeiculosCliente(){
    try {
    const result = await this.repositorioVeiculos.listarVeiculosCliente();
    return {
      statusCode: 200,
      message: "Sucesso ao listar veiculos",
      data: [result],
    };
      
    } catch (e) {
      return {
        statusCode: 500,
        message: `Error: ${e}`,
        data: ['Erro no Service'],
      };
    }
  }
}
