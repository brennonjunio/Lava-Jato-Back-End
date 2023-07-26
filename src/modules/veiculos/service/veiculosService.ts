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
      console.log("🚀 ~ file: veiculosService.ts:42 ~ veiculoService ~ editarTipoVeiculo ~ e:", e)
      return {
        statusCode: 500,
        message: `Error: ${e}`,
        data: [],
      };
    }
  }
}
