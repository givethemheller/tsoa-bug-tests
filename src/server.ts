import bodyParser from "body-parser";
import express from "express";
import http from "http";
import { RegisterRoutes } from "./routes";
function start() {

  // configure the app with baseline
  const app = express()
    .use(bodyParser.urlencoded({ limit: "50mb", extended: true }))
    .use(bodyParser.json({ limit: "50mb" }))

  RegisterRoutes(app);

  interface IError {
    status?: number;
    fields?: string[];
    message?: string;
    name?: string;
  }

  app.use(
    (
      err: IError,
      _req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      const status = err.status || 500;
      const body = {
        fields: err.fields || undefined,
        message: err.message || "An error occurred during the request.",
        name: err.name,
        status
      };
      res.status(status).json(body);
      next();
    }
  );

  const server = http.createServer(app);
  server.listen(3002);
}

start();
