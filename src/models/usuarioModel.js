import conexaoBancoDeDados from "../database/db_connection.js";

class usuarioModel {
  async logar(email, senha) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = `SELECT * FROM usuarios WHERE email = '${email}' AND senha = '${senha}'`;
    const res = await conexao.query(comandoSql);
    return res.rows;
  }
  async listar() {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "SELECT * FROM usuarios";
    const usuarios = await conexao.query(comandoSql);
    return usuarios.rows;
  }
}
export default new usuarioModel();
