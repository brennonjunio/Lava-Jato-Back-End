import path from "path";
import multer, { Multer } from "multer";
import { Request } from "express";
import AppStatus from "../../../shared/AppStatus";

export class UploadService {
  private multer: Multer;

  constructor() {
    const uploadsFolder = path.resolve(__dirname, "uploads");

    this.multer = multer({
      dest: uploadsFolder,
      storage: multer.diskStorage({
        destination: uploadsFolder,
        filename: (request, file, callback) => {
          const filename = file.originalname; // Personalize a geração do nome do arquivo conforme necessário
          callback(null, filename);
        },
      }),
    });
  }

  async processUploadedFile(file: any): Promise<string> {
    const processedFileName = file.filename;
    return processedFileName;
  }

  async uploadImage(req: Request): Promise<any> {
    try {
      await new Promise<void>((resolve, reject) => {
        this.multer.single("file")(req, undefined as any, (err: any) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
      const processedFileName = await this.processUploadedFile(req.file);
      return AppStatus.appSucess("Upload Efetuado com Sucesso!", processedFileName);
    } catch (error) {
      throw error;
    }
  }
}
