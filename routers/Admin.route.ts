import express, { Request, Response } from "express";
import { createVandor, getVandorById, getVandors } from "../controllers";

const router = express.Router();

router.post("/vandor", createVandor);
router.get("/vandor", getVandors);
router.get("/vandor:id", getVandorById);

router.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello from Admin",
  });
});

export { router as AdminRoute };
