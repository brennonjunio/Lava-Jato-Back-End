import { Router } from "express";
import { UploadController } from "../modules/perfil/service/uploadController";

const uploads = Router();

uploads.post(
  "/upload/image",
  new UploadController().uploadImage
);

export default uploads;
