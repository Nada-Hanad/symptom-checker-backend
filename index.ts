import express, { Application, Request, Response, Router } from "express";
import ChartsRouter from "./src/routes/chartsRoute";
import ScrappingRouter from "./src/routes/scrappingRoute";
import PostsRouter from "./src/routes/postsRoute";

var cors = require("cors");
const port = 3002;
const db = require("./config/db");

// Instance d'express
const app: Application = express();

const router: Router = express.Router();

// Initialiser les routes
app.use(express.json());
app.use(cors());

// Use the router
app.use(router);
ChartsRouter(router);
ScrappingRouter(router);
PostsRouter(router);
// Première route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello world" });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
