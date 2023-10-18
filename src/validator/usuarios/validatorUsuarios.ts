import { object, string } from "yup";

export const criarUsuarioSchema = object({
  body: object({
    nm_usuario: string().required("Informar Nome de Usuario"),
    senha: string().required("Informar uma senha Valida"),
    email: string().email("Formato de e-mail não aceito").required("Informar um e-mail valido"),
  }),
});
