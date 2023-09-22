import db from "../../../database/database";
const bcrypt = require("bcrypt");

export class UseCaseUsuarios {
  async usuarioJaCriado(param: string) {
    const result = await db.usuarios.findFirst({
      where: { email: param },
    });
    return result;
  }
  async criptSenha(param: string) {
    const salt = await bcrypt.genSalt(12);
    const senha = await bcrypt.hash(param, salt);
    return senha;
  }
}
