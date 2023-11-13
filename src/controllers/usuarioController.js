import usuarioModel from "../models/usuarioModel.js";

class UsuarioController {
  async login(req, res) {
    const { email, senha } = req.body;
    try {
      const usuario = await usuarioModel.logar(email, senha);
      if (usuario.length == 0) {
        return res.status(404).send({ message: "Email ou senha incorretos" });
      }
      return res.status(200).send(usuario[0]);
    } catch (error) {
      return res.status(404).send({ message: `Erro ao logar - ${error}` });
    }
  }
  async listar(req, res) {
    try {
      const usuarios = await usuarioModel.listar();
      return res.status(200).send(usuarios);
    } catch (error) {
      return res
        .status(500)
        .send({ message: `Erro ao listar usuários - ${error}` });
    }
  }
}

export default new UsuarioController();
