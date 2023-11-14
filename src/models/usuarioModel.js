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
    const comandoSql = `INSERT INTO Usuario (email, senha) VALUES ('${email}, '${senha}'
    )`;
    return await conexao.query(comandoSql);
  }
}
export default new usuarioModel();
