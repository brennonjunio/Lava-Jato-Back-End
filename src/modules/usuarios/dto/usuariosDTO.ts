export interface CriarUsuarioDTO {
  nm_usuario: string;
  senha: string;
  email: string;
}
export interface EditarUsuarioDTO{
  nm_usuario?: string;
  senha?: string;
  email?:string;
  status?:string;
}