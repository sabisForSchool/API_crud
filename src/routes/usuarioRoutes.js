import { Router } from "express";
import usuarioController from "../controllers/usuarioController.js";

const routes = new Router();

routes
  .get("/", usuarioController.listar)
  .get("/pedidos/:id", usuarioController.listarPedidos)
  .post("/cadastro", usuarioController.cadastrar);

export default routes;
