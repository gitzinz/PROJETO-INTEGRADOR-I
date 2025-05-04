import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Flora Accessories API",
      version: "1.0.0",
      description: "Documentação da API de controle de estoque de produtos",
    },
  },
  apis: ["src/routes/*.ts", "src/controllers/*.ts", "src/dtos/**/*.ts"], // Ajuste conforme sua estrutura
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Express) {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
