import { Request, Response } from "express";

async function dadosUserLogado(req: Request, res: Response) {
  const params = await req.headers;
  return params;
}

export default {
  dadosUserLogado,
};
