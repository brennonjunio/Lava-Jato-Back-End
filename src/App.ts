import express, { Request, NextFunction, Response } from "express";
import { router as routes } from "../src/routes/routes";
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT_SERVER || 4000;

// Middleware para fazer o parsing do corpo da requisição como JSON
app.use(express.json());

// Configurar o morgan para registrar solicitações HTTP
app.use(morgan("dev"));

// Definir as rotas
app.use(routes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Rodando na porta: ${PORT}`);
});
