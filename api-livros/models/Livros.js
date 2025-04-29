import mongoose from "mongoose";

const detailSchema = new mongoose.Schema({
  genre: String,
  publisher: String,
  pages: Number,
});

const livroSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number,
  details: [detailSchema],
});

const Livro = mongoose.model("Livro", livroSchema);

export default Livro;
