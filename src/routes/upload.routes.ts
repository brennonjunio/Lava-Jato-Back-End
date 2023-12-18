import { Router } from "express";
import { upload } from "../modules/perfil/service/uploadService";

const uploads = Router();

uploads.post('/uploads', upload.single('file'),  (req, res) => {
console.log('a')
})


export default uploads;





