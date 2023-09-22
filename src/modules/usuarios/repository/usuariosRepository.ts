import db from "../../../database/database";
import { CriarUsuarioDTO } from "../dto/usuariosDTO";
const bcrypt = require("bcrypt");

export class UsuariosRepository {
  async criarUsuarios(params: CriarUsuarioDTO) {
    const salt = await bcrypt.genSalt(12);
    const senha = await bcrypt.hash(params.senha, salt);
    const result = await db.usuarios.create({
      data: { nm_usuario: params.nm_usuario, senha: senha },
    });
    return result;
  }
}
