const arrayVazio = {
  status: false,
  statusCode: 400,
  error: "Sem Resultados",
  data: [],
};
async function appSucess(message: string, dados: any) {
  return {
    status: true,
    statusCode: 200,
    error: message,
    data: dados,
  };
}
async function updateSucess(message: string, dados: number) {
  return {
    status: true,
    statusCode: 201,
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
async function appError(message: string, dados: number) {
  return {
    status: false,
    statusCode: 500,
    error: message,
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
