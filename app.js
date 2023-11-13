import express from "express";
import cors from "cors";
import usuario from "./src/routes/usuarioRoutes.js";

const app = express();

app.use(cors("*"), express.json(), usuario);
app.listen(3000, () => {
  console.log("A API está rodando na porta 3000");
});
