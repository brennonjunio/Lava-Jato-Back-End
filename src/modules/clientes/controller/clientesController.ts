import { Request, Response } from "express";
import { criarClienteDTO } from "../dto/clientesDTO";
import { ClienteService } from "../service/clienteService";
import db from "../../../database/database";

export const clientesrv = new ClienteService();

export class ClienteController {
  async criarCliente(req: Request, res: Response) {
    try {
      const body = req.body as criarClienteDTO;
      const validaCliente = await db.clientes.findFirst({
        where: { cpf_cnpj: body.cpf_cnpj },
      });
      if (validaCliente) {
        throw new Error(`Cpf/Cnpj Já Cadastrado `);
      }

      const cliente = await clientesrv.salvar(body);

      return res
        .status(200)
        .json({ message: "Cliente Cadastrado Com sucesso", cliente });
    } catch (error) {
      return res.status(400).json(String(`${error}`));
    }
  }
  async listar(req: Request, res: Response) {
    try {
      const listarClientes = await clientesrv.listar();

      return res.status(200).json(listarClientes);
    } catch (error) {
      error;
    }
  }
  async atualizar(req: Request, res: Response) {
    try {
      const body = req.body;

      const atualizar = await clientesrv.atualizar(body);

      return res.status(201).json({ atualizar });
    } catch (error) {
      res
        .status(500)
        .json({
          status: true,
          data: { message: `Erro ao atualizar cadastro: ${error}` },
        });
    }
  }
  async deletar(req: Request, res: Response) {
    try {
      const {cd_cliente} = req.body;
       await clientesrv.deletar(cd_cliente);
      return res.status(200).json({ message:'Cliente Deletado com sucesso!' });
    } catch (error) {return error}
  }
  async inativar(req: Request, res: Response){
    try {
      const {cd_cliente} = req.body;
      await clientesrv.inativar(cd_cliente);
      return res.status(200).json({ message:'Cliente Inativado com sucesso!',cd_cliente });

    } catch (error) {
      res
        .status(500)
        .json({
          status: true,
          data: { message: `Erro ao Inativar cadastro: ${error}` },
        });
    }
  }
}
