import express from "express";
import cors from "cors";
import items from "./routes/items.js";
import { errorHandler } from "./utils/errors.js";

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req, res) => res.json({ ok: true, service: "node-api-kit" }));
app.use("/api/v1/items", items);
app.use(errorHandler);

app.listen(PORT, () => console.log(`node-api-kit on :${PORT}`));
