import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./database/data-source";
import productRoutes from "./routes/product.routes";
import { setupSwagger } from "./config/swagger";

const app = express();

app.use(express.json()); // permite JSON no body

//Rotas
app.use("/api/products", productRoutes);

//Swagger
setupSwagger(app);

// Inicializa o banco de dados
AppDataSource.initialize()
  .then(() => {
    console.info("Conectado ao banco de dados com sucesso");
  })
  .catch((error) => {
    console.error("Erro ao conectar com o banco de dados", error);
  });

export default app;
