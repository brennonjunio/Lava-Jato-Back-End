import { object, string } from "yup";

export const criarUsuarioSchema = object({
  body: object({
    nm_usuario: string().required("Informar Nome de Usuario").min(3,"Nome de usuario deve conter no minimo 3 caracteres"),
    senha: string().required("Informar uma senha Valida").min(4,'Senha de no minimo 4 caracteres').max(12,"Senha de no maximo 12 caracteres"),
    email: string().email("Formato de e-mail não aceito").required("Informar um e-mail valido"),
  }),
});
