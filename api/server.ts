import express from "express";
import { createServer } from "http";
import { registerRoutes } from "../server/routes";

const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let initialized = false;

async function init() {
  if (initialized) return;
  await registerRoutes(httpServer, app);
  initialized = true;
}

// Vercel serverless handler
export default async function handler(req: any, res: any) {
  await init();
  return app(req, res);
}
