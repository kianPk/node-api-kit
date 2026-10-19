import { Router } from "express";
import { z } from "zod";
import { validate } from "../middleware/validate.js";
import { requireAuth } from "../middleware/auth.js";
import { AppError } from "../utils/errors.js";

const router = Router();
const items = new Map();
let seq = 1;

const createSchema = z.object({
  body: z.object({
    title: z.string().min(1).max(120),
    done: z.boolean().optional()
  })
});

router.get("/", (_req, res) => {
  res.json({ ok: true, data: [...items.values()] });
});

router.post("/", requireAuth, validate(createSchema), (req, res) => {
  const id = String(seq++);
  const item = { id, title: req.parsed.body.title, done: !!req.parsed.body.done, createdAt: new Date().toISOString() };
  items.set(id, item);
  res.status(201).json({ ok: true, data: item });
});

router.get("/:id", (req, res, next) => {
  const item = items.get(req.params.id);
  if (!item) return next(new AppError(404, "Item not found"));
  res.json({ ok: true, data: item });
});

export default router;
