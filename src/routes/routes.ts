import { Router } from "express";
const router: Router = Router()

import clientesRoutes from './clientes.routes';
import veiculosRouter from "./veiculos.routes";
import agendasRouter from "./agendas.routes";
import servicosRouters from "./servicos.routes";


//ROTAS PARA OS CLIENTES CRUD 
router.use(clientesRoutes)

//ROTAS PARA VEICULOS
router.use(veiculosRouter)

//rotas para agendas
router.use(agendasRouter)

//rotas para servicos
router.use(servicosRouters)

export { router };
