import { Request, Response } from "express";
import { UploadService } from "./uploadService";

const servicos = new UploadService();

export class UploadController {
  async uploadImage(req: Request, res: Response) {
    try {
      const result = await servicos.uploadImage(req);
      return res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
}
