import express from "express";
import { login, signup } from "../controllers/user-controller.js";
import {
  createGoal,
  goalList,
  goalUpdate,
  goalDelete,
} from "../controllers/goal-controller.js";

const router = express.Router();
router.get("/", (req, res) => {
  res.send("NodeJS is running on port 5000");
});
router.post("/login", login);
router.post("/registration", signup);
router.post("/create-goal", createGoal);
router.get("/goal-list", goalList);
router.post("/goal-update", goalUpdate);
router.post("/goal-delete", goalDelete);

export default router;
