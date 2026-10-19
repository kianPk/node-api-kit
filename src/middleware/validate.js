import { AppError } from "../utils/errors.js";

export function validate(schema) {
  return (req, _res, next) => {
    const parsed = schema.safeParse({
      body: req.body,
      query: req.query,
      params: req.params
    });
    if (!parsed.success) {
      return next(new AppError(400, "Validation failed", parsed.error.flatten()));
    }
    req.parsed = parsed.data;
    next();
  };
}
