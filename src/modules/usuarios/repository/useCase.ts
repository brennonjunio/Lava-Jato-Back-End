import db from "../../../database/database";
const bcrypt = require("bcrypt");

export class UseCaseUsuarios {
  async emailEmUso(param: string) {
    const result = await db.usuarios.findFirst({
      where: { email: param },
    });
    return result;
  }
  async userEmUso(param: string) {
    const result = await db.usuarios.findFirst({
      where: { nm_usuario: param },
    });
    return result;
  }
  async criptSenha(param?: any) {
    const salt = await bcrypt.genSalt(12);
    const senha = await bcrypt.hash(param, salt);
    return senha;
  }
}
