// Defininfo opções para o Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0", // Versão do Swagger
    info: {
      title: "API Livros",
      description: "API Rest para catálogo de livros",
      version: "1.0.0",
      contact: {
        name: "gialbanes",
      },
      servers: [{ url: "http://localhost:4000" }],
    },
  },
  apis: ["./routes/*.js", "./docs/swaggerDocs.yaml"], // Caminho para os arquivos onde você documenta as rotas
};

export default swaggerOptions;
