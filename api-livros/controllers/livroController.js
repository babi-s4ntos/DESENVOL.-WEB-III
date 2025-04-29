import Livro from "../models/Livros.js";
import livroService from "../services/livroService.js";
import { ObjectId } from "mongodb";

const getAllLivros = async (req, res) => {
  try {
    const livros = await livroService.getAll();
    res.status(200).json({ livros: livros });
  } catch (error) {
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const CreateLivro = async (req, res) => {
  try {
    const { title, author, year, details } = req.body;
    await livroService.Create(title, author, year, details);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const DeleteLivro = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      livroService.Delete(id);
      res.sendStatus(204);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const updateLivro = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const { title, author, year, details } = req.body;
      const livro = await livroService.Update(id, title, author, year, details);
      res.status(200).json({ livro: livro });
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const getOneLivro = async (req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            const livro = await livroService.getOne(id)
            if(!livro){
                res.sendStatus(404)
            } else {
                res.status(200).json({livro})
            }
        } else {
            res.sendStatus(400)
        }
    } catch(error){
        res.status(500).json({error: "Erro interno no servidor."})
    }
}
export default { getAllLivros, CreateLivro, DeleteLivro, updateLivro, getOneLivro };
