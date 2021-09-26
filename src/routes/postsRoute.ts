import { Router } from "express";
import { addPost, deletePost, getPosts } from "../controllers/postsController";

const initRouter = (router: Router) => {
  router.route("/posts").get(getPosts).post(addPost);
  router.route("/posts/:id").delete(deletePost);
};

export default initRouter;
