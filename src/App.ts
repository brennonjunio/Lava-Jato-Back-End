import express from "express";
import { router as routes } from "../src/routes/routes";
import { AuthMiddleware } from "./middlewares/authMiddleware";
const morgan = require("morgan");
import cors from "cors"
require("dotenv").config();

const app = express();
const PORT = process.env.PORT_SERVER || 4000;

export const auth = {
  secret: String(process.env.SECRET),
  expires: '1h'
}

app.use(express.json());

app.use(morgan("dev"));

app.use(cors());
// app.use(AuthMiddleware.varify)
app.use(routes);

app.listen(PORT, () => {
  console.log(`Rodando na porta: ${PORT}`);
});
