import usuarioModel from "../models/usuarioModel.js";

class UsuarioController {
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
  async cadastrar(req, res) {
    console.log("oi");
    const { email, senha } = req.body;
    if (!email) {
      return res.status(400).send({ message: "Digite seu email" });
    }
    if (!senha) {
      return res.status(400).send({ message: "Digite sua senha" });
    }
    try {
      const resultado = await usuarioModel.cadastrar(email, senha);
      return res
        .status(201)
        .send({ message: "Usuário cadastrado com sucesso" });
    } catch (error) {
      res.status(400).send({ message: `Erro ao cadastrar Usuário - ${error}` });
    }
  }
  async listarPedidos(req, res) {
    const idUsuario = req.params.id;
    try {
      const pedidos = await usuarioModel.listarPedidos(idUsuario);
      if (pedidos.length === 0) {
        return res.status(404).send({ pedidos: false, message: "Sem pedidos" });
      }

      let precoTotal = 0;
      let nomesProdutos = [];

      for (let pedido of pedidos) {
        const produto = await usuarioModel.buscaProduto(pedido.id_produto);
        precoTotal += produto[0].preco;
        nomesProdutos.push(produto[0].nome);
      }

      return res
        .status(200)
        .send({ preco: precoTotal, produtos: nomesProdutos });
    } catch (error) {
      return res
        .status(500)
        .send({ message: `Erro ao listar pedidos - ${error}` });
    }
  }
}

export default new UsuarioController();
