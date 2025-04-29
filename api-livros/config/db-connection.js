// Importando o mongoose
import mongoose from "mongoose";

// usuário e senha do bd
const dbUser = "gialbanesestudos";
const dbPassword = "sJdQMw5n4u5BfrdD";
const connect = () => {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@clusterlivros.nczwarg.mongodb.net/api-livros?retryWrites=true&w=majority&appName=ClusterLivros`
  );
  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("Erro ao conectar com o mongoDB.");
  });
  connection.on("open", () => {
    console.log("Conectado ao mongoDB com sucesso!");
  });
};
connect();
export default mongoose;