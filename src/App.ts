import express, { Request, NextFunction, Response } from "express";
import { router as routes } from "../src/routes/routes";
require("dotenv").config();



const app = express();
const PORT = process.env.PORT_SERVER || 4000;

// Middleware para fazer o parsing do corpo da requisição como JSON
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.on("finish", () => {
    const status = res.statusCode;
    const message = res.statusMessage;

    console.log(`Metodo:${req.method} URL: ${req.originalUrl} COD: ${status} ${message}`);
  });

  next();
});

// Definir as rotas
app.use(routes);
 
// Iniciar o servidor
app.listen( PORT, () => {
  console.log(`Serviço rodando na porta: ${PORT}`)
});
