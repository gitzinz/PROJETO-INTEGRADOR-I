import * as dotEnv from "dotenv";
dotEnv.config();
import { DataSource } from "typeorm";
import { Product } from "../models/Product"; // Ajuste o caminho conforme sua estrutura
import config from "../config/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: config.db.host,
  port: Number(config.db.port),
  username: config.db.user,
  password: config.db.password,
  database: config.db.database,
  synchronize: false, // Não deve ser true em produção
  logging: true,
  entities: [Product],
  migrations: [__dirname + "/migrations/*.ts"],
  subscribers: [],
});
