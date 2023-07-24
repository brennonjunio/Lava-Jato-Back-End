import { Router } from "express";
const router: Router = Router()

import clientesRoutes from './clientes.routes';



router.use(clientesRoutes)

export { router };
