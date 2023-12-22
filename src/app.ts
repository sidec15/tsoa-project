// src/app.ts
import express, {json, urlencoded} from "express";
import { RegisterRoutes } from "./tsoa-output/routes";
import swaggerUi from 'swagger-ui-express';
import * as swaggerJson from './tsoa-output/swagger.json';

export const app = express();

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

export const apiDocPath = "/api-docs"
const jsonPath = `${apiDocPath}/swagger.json`;
const options: swaggerUi.SwaggerUiOptions = {
  swaggerOptions: {
    url: jsonPath
  },
}
app.get(jsonPath, (_req, res) => {
  res.json(swaggerJson);
});

// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(apiDocPath, swaggerUi.serveFiles(undefined, options), swaggerUi.setup(undefined, options));

RegisterRoutes(app);