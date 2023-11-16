import conexaoBancoDeDados from "../database/db_connection.js";

class usuarioModel {
  async listar() {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "SELECT * FROM usuarios";
    const usuarios = await conexao.query(comandoSql);
    return usuarios.rows;
  }
  async cadastrar(email, senha) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "INSERT INTO usuarios (email, senha) VALUES ($1, $2)";
    return await conexao.query(comandoSql, [email, senha]);
  }
  async buscarPorId(id) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "SELECT * FROM Usuario WHERE id = ($1)";
    return await conexao.query(comandoSql, [id]);
  }
  async listarPedidos(idUsuario) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "SELECT * FROM pedidos WHERE id_usuario = ($1)";
    const pedidos = await conexao.query(comandoSql, [idUsuario]);
    return pedidos.rows;
  }
  async buscaProduto(idProduto) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "SELECT nome, preco FROM cardapio WHERE id = ($1)";
    const produto = await conexao.query(comandoSql, [idProduto]);
    return produto.rows;
  }
  async deletarPedido(idPedido) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "DELETE FROM pedidos WHERE id_pedido = ($1)";
    const resp = await conexao.query(comandoSql, [idPedido]);
    console.log(resp);
    return resp;
  }
  async fazerPedido(idProduto, observacao, idUsuario) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql =
      "INSERT INTO pedidos (id_produto, id_usuario, observacao) VALUES ($1, $2, $3)";
    return await conexao.query(comandoSql, [idProduto, idUsuario, observacao]);
  }
}
export default new usuarioModel();
