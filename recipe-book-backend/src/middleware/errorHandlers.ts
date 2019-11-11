import { NextFunction, Request, Response, Router } from "express";
import * as ErrorHandler from "../util/ErrorHandlers";

function handle404Error(router: Router) {
  router.use(() => {
    ErrorHandler.notFoundError();
  });
}

function handleClientErrors(router: Router) {
  router.use(
    (
      err: ErrorHandler.ResponseError,
      req: Request,
      res: Response,
      next: NextFunction,
    ) => {
      ErrorHandler.clientError(err, res, next);
    },
  );
}

function handleServerErrors(router: Router) {
  router.use((err: Error, req: Request, res: Response) => {
    ErrorHandler.serverError(err, res);
  });
}

export default [handle404Error, handleClientErrors, handleServerErrors];
