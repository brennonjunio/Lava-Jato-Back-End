import { CriarUsuarioDTO } from "../dto/usuariosDTO";
import { UsuariosRepository } from "../repository/usuariosRepository";
import { UseCaseUsuarios } from "../repository/useCase";
export class UsuariosService {
  private repoUsuarios: UsuariosRepository = new UsuariosRepository();
  private  case: UseCaseUsuarios = new UseCaseUsuarios();
  async criarUsuarios(params: CriarUsuarioDTO) {
    try {
        if(await this.case.usuarioJaCriado(params.email)){
            return {
                statusCode: 500,
                message: `Email Já cadastrado : ${params.email}`,
              };
            }
      const result = await this.repoUsuarios.criarUsuarios(params);
      return {
        statusCode: 200,
        status: true,
        data: result,
        message: "Sucesso ao Salvar Usuario!",
      };
    } catch (error) {
      throw `erro ao Criar Usuario: ${error}`;
    }
  }
}
