import { Router } from "express";
import usuarioController from "../controllers/usuarioController.js";

const routes = new Router();

routes
  .post("/login", usuarioController.login)
  .get("/", usuarioController.listar);
export default routes;
