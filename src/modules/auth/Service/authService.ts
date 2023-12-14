import { log } from "console";
import db from "../../../database/database";
import { AuthDTO } from "../DTO/authDTO";
import { AuthUseCase } from "../useCase/authUseCase";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

export class AuthService {
  case = new AuthUseCase();

  async login(params: AuthDTO) {
    try {
      const auth = await db.usuarios.findFirst({
        where: {
          email: params.email,
          status: "A",
        },
      });
      if (auth == null || false) {
        throw "";
      }

      const senhaOK = await bcrypt.compare(params.senha, auth.senha);
      if (senhaOK) {
        const token = jwt.sign(
          {
            user: auth.nm_usuario,
            userId: auth.cd_usuario,
          },
          process.env.SECRET,
          { expiresIn: '8h' }
        );
        return {
          statusCode: 200,
          status: true,
          token: token,
          user:auth.nm_usuario,
          cd_usuario: auth.cd_usuario,
          message: "Login Realizado Com Sucesso",
        };
      } else {
        throw ``;
      }
    } catch (error) {
      throw `Login ou senha incorretos`;
    }
  }
  validaToken(token: any) {
    return this.case.validaToken(token);
  }
}
