const arrayVazio = {
  status: false,
  statusCode: 400,
  message: "Sem Resultados",
  data: [],
};
async function appSucess(message: string, dados: any,body?:any) {
  return {
    status: true,
    statusCode: 200,
    message: message,
    data: dados,
    body:body
  };
}
async function updateSucess(message: string, dados: number) {
  return {
    status: true,
    statusCode: 202,
    message: message,
    data: dados,
  };
}
async function updateFalse(message: string, dados: number) {
  return {
    status: false,
    statusCode: 400,
    message: message,
    data: dados,
  };
}
async function appError(message: string, dados: any) {
  return {
    status: false,
    statusCode: 500,
    message: message,
    data: dados,
  };
}

const deletadoSucess = {
  status: true,
  statusCode: 201,
  message: "Deletado Com Sucesso",
  data: [],
};
export default {
  arrayVazio,
  appSucess,
  deletadoSucess,
  updateSucess,
  updateFalse,
  appError
};
