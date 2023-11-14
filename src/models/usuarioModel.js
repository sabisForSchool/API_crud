import conexaoBancoDeDados from "../database/db_connection.js";

class usuarioModel {
  async logar(email, senha) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "SELECT * FROM usuarios WHERE email = $1 AND senha = $2";
    const res = await conexao.query(comandoSql, [email, senha]);
    return res.rows;
  }
  async listar() {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "SELECT * FROM usuarios";
    const usuarios = await conexao.query(comandoSql);
    return usuarios.rows;
  }
  async cadastrar(email, senha) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = `INSERT INTO Usuario (email, senha) VALUES ('${email}, '${senha}'
    )`;
    return await conexao.query(comandoSql);
  }
}
export default new usuarioModel();
