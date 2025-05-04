import * as dotEnv from "dotenv";
dotEnv.config();

const config = {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.FLORA_ACCESSORIES_DB_HOST || "localhost",
    port: process.env.FLORA_ACCESSORIES_DB_PORT || "5432",
    user: process.env.FLORA_ACCESSORIES_DB_USER || "postgres",
    password: process.env.FLORA_ACCESSORIES_DB_PASSWORD || "postgres",
    database: process.env.FLORA_ACCESSORIES_DB_NAME || "postgres",
  },
};

export default config;
