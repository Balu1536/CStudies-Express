import { RequestHandler } from "express";
import { ZodTypeAny } from "zod";

export const validate = (schema: ZodTypeAny): RequestHandler => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        status: "error",
        error: result.error.issues[0].message, // ✅ issues (Zod v4)
      });
    }

    req.body = result.data;
    next();
  };
};
