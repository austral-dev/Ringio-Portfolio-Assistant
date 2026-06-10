import { Router } from "express";
import {
    obtenerHistorialDeUsuarioController,
    obtenerTodosLosChatsController,
    obtenerChatPorIdController,
    eliminarChatPorIdController,
    eliminarHistorialDeUsuarioController,
    obtenerUltimosChatsController
} from "../controllers/history.controller.js";

const router = Router();

router.get("/history", obtenerTodosLosChatsController);
router.get("/user-history", obtenerHistorialDeUsuarioController);
router.get("/history/:chatId", obtenerChatPorIdController);
router.delete("/user-history/:chatId", eliminarChatPorIdController);
router.delete("/user-history", eliminarHistorialDeUsuarioController);
router.get("/user-last-history", obtenerUltimosChatsController);


export { router as historyRouter };