import express from "express";
import { router as routes } from "../src/routes/routes";
const morgan = require("morgan");
import cors from "cors";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT_SERVER || 4000;

app.use(express.json());

app.use(morgan("dev"));

app.use(cors());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Rodando na porta: ${PORT}`);
});
