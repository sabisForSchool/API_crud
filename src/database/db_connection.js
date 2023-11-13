import pg from "pg";

const senha = process.env.SENHA;
const host = process.env.HOST;
const matricula = process.env.MATRICULA;

async function conectar() {
  const pool = new pg.Pool({
    //criando o nosso mando de dados
    connectionString: `postgres://aluno_${matricula}:${senha}@${host}:5439/temp?schema=aluno_${matricula}`,
  });
  const conexaoBancoDeDados = await pool.connect();
  console.log("Banco de dados conectado!");

  return conexaoBancoDeDados;
}

export default { conectar };
