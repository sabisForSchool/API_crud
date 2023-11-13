import { Router } from "express";
import usuarioController from "../controllers/usuarioController";

const routes = new Router();

routes.post("/login", usuarioController.login);
