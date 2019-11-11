import { HTTP404Error, HTTPClientError } from "./httpErrors";
import { NextFunction, Response } from "express";

export interface ResponseError extends Error {
  status: number;
}

export function notFoundError() {
  throw new HTTP404Error("Method not found.");
}

export function clientError(err: ResponseError, res: Response, next: NextFunction) {
  if (err instanceof HTTPClientError) {
    console.log(err);
    res.status(err.status).send(err.message);
  } else {
    next(err);
  }
}

export function serverError(err: Error, res: Response) {
  console.log(err);
  if (process.env.NODE_ENV === "production") {
    res.status(500).send("Internal Server Error");
  } else {
    res.status(500).send(err.stack);
  }
}
