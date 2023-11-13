import usuarioModel from "../models/usuarioModel.js";

class usuarioController {
  async login(req, res) {
    const { email, senha } = req.body;

    try {
      const usuario = await usuarioModel.logar(email, senha);
      return res.status(200).send(usuario);
    } catch (error) {
      return res.status(404).send({ message: "Erro ao logar" });
    }
  }
}

export default usuarioController;
