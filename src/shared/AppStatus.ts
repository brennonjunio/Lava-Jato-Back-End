  const arrayVazio = {
    status: false,
    statusCode: 400,
    message: 'Sem Resultados',
    data: [],
  };
async function appSucess(message:string, dados:any) {
    return{
        status: true,
        statusCode: 200,
        message: message,
        data: dados,
    }
}
export default{
    arrayVazio,
    appSucess
}