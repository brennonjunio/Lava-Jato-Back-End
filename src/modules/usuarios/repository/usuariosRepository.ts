import db from "../../../database/database";
import { CriarUsuarioDTO } from "../dto/usuariosDTO";
import { UseCaseUsuarios } from "./useCase";

export class UsuariosRepository {
  private case: UseCaseUsuarios = new UseCaseUsuarios();

  async criarUsuarios(params: CriarUsuarioDTO) {
    const senha = await this.case.criptSenha(params.senha);
    const result = await db.usuarios.create({
      
      data: { nm_usuario: params.nm_usuario, senha: senha },
    });
    return result;
  }
}
