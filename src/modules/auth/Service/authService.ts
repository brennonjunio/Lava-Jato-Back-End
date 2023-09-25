import { log } from "console";
import db from "../../../database/database";
import { AuthDTO } from "../DTO/authDTO";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

export class AuthService {
  async login(params: AuthDTO) {
    try {
      const auth = await db.usuarios.findFirst({
        where: {
          email: params.email,
          status: "A",
        },
      });

      if (auth) {
        const senhaOK = await bcrypt.compare(params.pass, auth.senha);
        if (senhaOK) {
          const result = await jwt.sign(auth.cd_usuario, process.env.SECRET);
          return {
            statusCode: 200,
            status: true,
            data: result,
            message: "Login Realizado Com Sucesso",
          };
        }
      }
    } catch (error) {
      throw `Login ou senha incorretos: ${error}`;
    }
  }
}
