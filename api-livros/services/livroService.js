import Livro from "../models/Livros.js";

class livroService {
  async getAll() {
    try {
      const livros = await Livro.find();
      return livros;
    } catch (error) {
      console.log(error);
    }
  }

  async Create(title, author, year, details) {
    try {
      const newLivro = new Livro({
        title,
        author,
        year,
        details,
      });
      await newLivro.save();
    } catch (error) {
      console.log(error);
    }
  }

  async Delete(id) {
    try {
      await Livro.findByIdAndDelete(id);
      console.log(`Livro com a id: ${id} foi deletado.`);
    } catch (error) {
      console.log(error);
    }
  }

    async Update(id, title, author, year, details) {
      try {
        await Livro.findByIdAndUpdate(id, {
          title,
          author,
          year,
          details,
        });
        console.log(`Dados do livro com a id: ${id} alterados com sucesso!`);
      } catch (error) {
        console.log(error);
      }
    }

    async getOne(id){
        try{
            const livro = await Livro.findOne({_id:id})
            return livro
        } catch(error) {
            console.log(error)
        }
    }
}

export default new livroService();
