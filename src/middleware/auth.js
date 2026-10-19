import { AppError } from "../utils/errors.js";

/** Expects `Authorization: Bearer <token>`. Replace verify() with real JWT. */
export function requireAuth(req, _res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return next(new AppError(401, "Missing bearer token"));
  // demo: accept any non-empty token and attach a user
  req.user = { id: "demo-user", token };
  next();
}
