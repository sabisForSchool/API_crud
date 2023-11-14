import { Router } from "express";
import usuarioController from "../controllers/usuarioController.js";

const routes = new Router();

routes.get("/", usuarioController.listar);

export default routes;
