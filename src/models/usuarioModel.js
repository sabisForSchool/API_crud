import conexaoBancoDeDados from "../database/db_connection.js";

class usuarioModel {
  async logar(email, senha) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSql = "SELECT * FROM Usuarios WHERE email = ? AND senha = ?";
    return await conexao.query(comandoSql, [email, senha]);
  }
}
export default usuarioModel;
