import express, { Request, Response } from "express";
import { createVandor } from "../controllers";

const router = express.Router();

router.post("/vandor", createVandor);

router.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello from Vandor",
  });
});

export { router as VandorRoute };
