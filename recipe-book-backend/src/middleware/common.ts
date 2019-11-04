import { Router } from "express";
import cors from "cors";
import parser from "body-parser";
import compression from "compression";

export const handleCors = (router: Router) => {
  router.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "HEAD", "OPTIONS"],
      preflightContinue: false,
      credentials: true,
      optionsSuccessStatus: 204,
    }),
  );
};

export const handleBodyRequestParsing = (router: Router) => {
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};

export const handleCompression = (router: Router) => {
  router.use(compression());
};
