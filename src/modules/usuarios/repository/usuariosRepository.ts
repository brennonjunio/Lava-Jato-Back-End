import db from "../../../database/database";
import { CriarUsuarioDTO, EditarUsuarioDTO } from "../dto/usuariosDTO";
import { UseCaseUsuarios } from "./useCase";

export class UsuariosRepository {
  private case: UseCaseUsuarios = new UseCaseUsuarios();

  async criarUsuarios(params: CriarUsuarioDTO) {
    const senha = await this.case.criptSenha(params.senha);
    const result = await db.usuarios.create({
      data: { ...params, senha: senha },
    });
    return result;
  }
  async editarUsuario(cd_usuario: number, params: EditarUsuarioDTO) {

    const senha = params.senha ? await this.case.criptSenha(params.senha) : undefined;
    const result = await db.usuarios.update({
      where: { cd_usuario: cd_usuario },
      data: { ...params, senha: senha },
    });
    return result;
  }
}
