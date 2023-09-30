import { CriarUsuarioDTO, EditarUsuarioDTO } from "../dto/usuariosDTO";
import { UsuariosRepository } from "../repository/usuariosRepository";
import { UseCaseUsuarios } from "../repository/useCase";
export class UsuariosService {
  private repoUsuarios: UsuariosRepository = new UsuariosRepository();
  private case: UseCaseUsuarios = new UseCaseUsuarios();
  async criarUsuarios(params: CriarUsuarioDTO) {
    
    const email = await this.case.emailEmUso(params.email);
    const user = await this.case.userEmUso(params.nm_usuario);
    if (email || user) {
      throw `Usuario ou Email em uso ou invalido!`;
    }
    try {
      const result = await this.repoUsuarios.criarUsuarios(params);
      return {
        statusCode: 200,
        status: true,
        data: [],
        message: "Sucesso ao Salvar Usuario!",
      };
    } catch (error) {
      throw `erro ao Criar Usuario: ${error}`;
    }
  }
  async editarUsuario(cd_usuario: any, params: EditarUsuarioDTO) {
    const email = params.email
      ? await this.case.emailEmUso(params.email)
      : false;
    const user = params.nm_usuario
      ? await this.case.userEmUso(params.nm_usuario)
      : false;
    if (email || user) {
      throw `Usuario ou e-mail invalido`;
    }
    try {
      const result = await this.repoUsuarios.editarUsuario(cd_usuario, params);
      return {
        statusCode: 200,
        status: true,
        data: [],
        message: "Sucesso ao Editar Usuario!",
      };
    } catch (error) {
      throw `erro ao Editar Usuario: ${error}`;
    }
  }
  async listarUsuariosAll() {
    try {
      const result = await this.repoUsuarios.listarUsuariosAll();
      return {
        statusCode: 200,
        status: true,
        data: result,
        message: "Sucesso ao Editar Usuario!",
      };
    } catch (error) {
      throw `Erro ao Listar Usuarios ${error}`;
    }
  }
}
