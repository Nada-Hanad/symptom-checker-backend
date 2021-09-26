import { Router } from "express";
import { fetchHtml } from "../controllers/scrappingController";

const initRouter = (router: Router) => {
  router.route("/articles").get(fetchHtml);
};

export default initRouter;
