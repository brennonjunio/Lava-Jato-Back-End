import multer from 'multer';
import path from 'path';

const uploadsFolder = path.resolve(__dirname, 'uploads');

const configMulter = multer.diskStorage({
    destination:uploadsFolder,
    filename:(request:any, file:any, callback:any) => {
        const filename = file.filename;

        return callback(null, filename)
    }
})

const upload = multer({storage:configMulter});

export { upload }