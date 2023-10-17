import dotenv from "dotenv"
dotenv.config()
import jwt from 'jsonwebtoken';

export class AuthUseCase{
    validaToken(token:any) {
        
        let result;
        try{
          const secret = process.env.SECRET;
          const decoded = jwt.verify(token, String(secret), { ignoreExpiration: false });
    
          result = {isValidToken:true , data: decoded}
        }catch(err){
          result = {isValidToken:false , err}
        }
        return result;
        }
}

