import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../config/swagger.json";

export const handleApiDocs = (router: Router) => {
  router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
