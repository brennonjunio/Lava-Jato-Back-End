import { CriarUsuarioDTO, EditarUsuarioDTO } from "../dto/usuariosDTO";
import { UsuariosRepository } from "../repository/usuariosRepository";
import { UseCaseUsuarios } from "../repository/useCase";
import AppStatus from "../../../shared/AppStatus";
export class UsuariosService {
  private repoUsuarios: UsuariosRepository = new UsuariosRepository();
  private case: UseCaseUsuarios = new UseCaseUsuarios();
  async criarUsuarios(params: CriarUsuarioDTO) {
    const email = await this.case.emailEmUso(params.email);
    const user = await this.case.userEmUso(params.nm_usuario);
    if (email || user) {
      return AppStatus.updateFalse("Usuario ou email em uso/invalido", 0);
    }
    try {
      const result = await this.repoUsuarios.criarUsuarios(params);
      return AppStatus.appSucess("Usuario Criado Com sucesso", params.email);
    } catch (error) {
      return AppStatus.appError("Erro ao cadastrar Usuario", 0);
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
      return AppStatus.updateFalse("Usuario ou email em uso/invalido", 0);
    }
    try {
      const result = await this.repoUsuarios.editarUsuario(cd_usuario, params);
      return AppStatus.updateSucess("Usuario Editado Com sucesso", 1);
    } catch (error) {
      return AppStatus.appError("Erro ao Editar Usuario", 0);
    }
  }
  async listarUsuariosAll() {
    try {
      const result = await this.repoUsuarios.listarUsuariosAll();
      return AppStatus.appSucess("Usuario Criado Com sucesso", result);
    } catch (error) {
      throw `Erro ao Listar Usuarios ${error}`;
    }
  }
}
