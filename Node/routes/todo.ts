import express from "express";
import { addTodo, getTodo } from "../data.js";

const router = express.Router();

router.post("/createTodo", (req, res) => {
  const text = req.body.text;

  if (!text) {
    res.json({ message: "Text should be provided!" });
  }
  const addedTodo = addTodo(text);
  res.json({ message: "Todo Added!", todo: addedTodo });
});

router.get("/todo/:id", (req,res) => {
    const todo = getTodo(+req.params.id);
    res.json({message:"Success", todo:todo});
})

export default router;