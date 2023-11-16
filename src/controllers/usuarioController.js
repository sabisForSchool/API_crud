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
      const listaPedidos = [];

      for (let pedido of pedidos) {
        console.log(pedido);
        const produto = await usuarioModel.buscaProduto(pedido.id_produto);
        listaPedidos.push({
          nome: produto[0].nome,
          preco: produto[0].preco,
          observacao: pedido.observacao,
          id: pedido.id_pedido,
        });
      }
      return res.status(200).send(listaPedidos);
    } catch (error) {
      return res
        .status(500)
        .send({ message: `Erro ao listar pedidos - ${error}` });
    }
  }
  async deletarPedido(req, res) {
    try {
      const idDoPedido = parseInt(req.params.id);
      console.log(idDoPedido);
      const resp = await usuarioModel.deletarPedido(idDoPedido);
      res.status(500).send({ message: "Deletado com sucesso" });
    } catch (error) {
      res.status(500).send({ message: `Erro ao deletar pedido - ${error}` });
    }
  }
  async fazerPedido(req, res) {
    const { idProduto, observacao, idUsuario } = req.body;
    try {
      const retorno = await usuarioModel.fazerPedido(
        idProduto,
        observacao,
        idUsuario
      );
      console.log(retorno);
      res.status(200).send({ message: "Pedido enviado com Sucesso!" });
    } catch (error) {
      res.status(500).send({ message: `Erro ao enviar pedido - ${error}` });
    }
  }
}

export default new UsuarioController();
