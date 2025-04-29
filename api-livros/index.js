import express from "express";
const app = express();
import livroRoutes from "./routes/livroRoutes.js";
import Livro from "./models/Livros.js";
import mongoose from "./config/db-connection.js";

// Importação Swagger
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerOptions from "./config/swagger-config.js";
// Função para gerar documentação Swagger
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Rota para a documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", livroRoutes);

//mongoose.connect("mongodb://127.0.0.1:27017/api-livros");

const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log("error");
  }
  console.log(`API rodando em http://localhost:${port}`);
  console.log(`Documentação API rodando em: http://localhost:${port}/api-docs`)
});
