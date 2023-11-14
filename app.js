import express from "express";
import cors from "cors";
import usuario from "./src/routes/usuarioRoutes.js";
import login from "./src/routes/login.js";

const app = express();

app.use(cors("*"), express.json(), usuario, login);
app.listen(3000, () => {
  console.log("A API está rodando na porta 3000");
});
