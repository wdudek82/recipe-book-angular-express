import { Router } from "express";
import { NextFunction, Request, Response } from "express";

type Wrapper = (router: Router) => void;

export const applyMiddleware = (middleware: Wrapper[], router: Router) => {
  for (const f of middleware) {
    f(router);
  }
};

export type Handler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void> | void;

type HttpMethod = "get" | "post" | "put" | "patch" | "delete" | "head" | "options"

export interface Route {
  path: string;
  method: HttpMethod;
  handler: Handler | Handler[];
}

export const applyRoutes = (routes: Route[], router: Router) => {
  for (const route of routes) {
    const { method, path, handler } = route;
    router[method](path, handler);
  }
};
