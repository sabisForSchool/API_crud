import jwt from "jsonwebtoken";
import authModel from "../models/authModel.js";

class authController {
  async logar(req, res) {
    const { email, senha } = req.body;
    if (!email) {
      return res.status(400).send({ message: "Digite seu email" });
    }
    if (!senha) {
      return res.status(400).send({ message: "Digite sua senha" });
    }
    try {
      const usuario = await usuarioModel.logar(email, senha);
      if (usuario.length == 0) {
        return res.status(404).send({ message: "Não Autorizado" });
      }
      const token = jwt.sign(
        {
          id: usuario[0].id,
          email: usuario[0].email,
        },
        `${process.env.SECRET}`,
        {
          expiresIn: "1h",
        }
      );
      console.log(token);
      return res.status(200).send(token);
    } catch (error) {
      return res.status(404).send({ message: `Erro ao logar - ${error}` });
    }
  }
}

export default new authController();
