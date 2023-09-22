export class CriarUsuarioDTO {
  nm_usuario: string;
  senha: string;
  email: string;
}
export class EditarUsuarioDTO{
  nm_usuario?: string;
  senha?: string;
  email?:string;
  status?:string;
}