import express from "express";
import cors from "cors";

const app = express();

app.use(express.json(), cors());
app.listen(3000, () => {
  console.log("A API está rodando na porta 3000");
});
