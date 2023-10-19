import { Request, Response } from "express";
import axios from "axios";
export const buscarCep = async (req: Request, res: Response) => {
  const { cep } = req.params;
  const result = await axios({
    method: "get",
    url: `https://viacep.com.br/ws/${cep}/json/`,
  });

if(result.data.erro == 'true'){
    return res.status(400).json({error: "Cep Inexistente ou invalido"});   
}
  return res.status(200).json(result.data);
};
