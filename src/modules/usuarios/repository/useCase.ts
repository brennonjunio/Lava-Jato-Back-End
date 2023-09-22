import db from "../../../database/database";
export class UseCaseUsuarios{
async usuarioJaCriado(param:string){
  const  result = await db.usuarios.findFirst({
        where:{email:param}
    })
        return result;
}
}