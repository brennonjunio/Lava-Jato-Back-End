import db from "../../../../database/database";

export class useCaseAgenda{
async agendaRepetida(data:string){
   const result = await db.$queryRawUnsafe("SELECT EXISTS(SELECT * FROM agenda WHERE DATE(horario) =?)",data)

    return result;
}

}
