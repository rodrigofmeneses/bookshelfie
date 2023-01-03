import express from "express";
import AuthorController from "../controllers/authorsController.js";

const router = express.Router();

router
  .get("", AuthorController.getAuthors)
  .get("/:id", AuthorController.getAuthor)
  .post("", AuthorController.addAuthor)
  .put("/:id", AuthorController.updateAuthor)
  .delete("/:id", AuthorController.removeAuthor);

export default router;
