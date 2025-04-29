import express from "express";
const livroRoutes = express.Router();
import livroController from "../controllers/livroController.js";

livroRoutes.get("/livros", livroController.getAllLivros);
livroRoutes.post("/livros", livroController.CreateLivro);
livroRoutes.delete("/livros/:id", livroController.DeleteLivro);
livroRoutes.put("/livros/:id", livroController.updateLivro)
livroRoutes.get("/livros/:id", livroController.getOneLivro)

export default livroRoutes;
