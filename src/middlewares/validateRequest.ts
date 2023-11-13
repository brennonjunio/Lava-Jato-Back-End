import { AnySchema } from "yup";
import { Request, Response, NextFunction } from "express";

const validate =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });


      next();
    } catch (error) {
        if (error instanceof Error) { 
          return res.status(400).json({message:error.message});
        } else {
          return res.status(500).json({message:'Erro interno do servidor'});
        }
      }
    };

export default validate;
