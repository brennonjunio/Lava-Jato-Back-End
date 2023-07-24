import express from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import {router} from "../routes/routes";

export class ExpressConfig {
  private server: express.Application;

  constructor() {
    this.init();
  }

  private setServer() {
    this.server = express();
  }

  getServer() {
    return this.server;
  }

  setMiddleware(middlewares: any) {
    middlewares.forEach((middleware) => {
      this.getServer().use(middleware);
    });
  }

  setRoutes(routesContext) {
    this.getServer().use(routesContext);
  }

  setErrorLongHandlers() {
    this.getServer().use(function (error, req, res, next) {
      console.error(error);
      res.status(error.statusCode || 500).json(error);
    });
  }
  init() {
    this.setServer();

    // this.getServer().use(rateLimiterMiddleware)
    this.setRoutes(router);

    this.getServer().use(router);

    this.setErrorLongHandlers();
  }
}
