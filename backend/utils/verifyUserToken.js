import jwt from "jsonwebtoken";
import { customErrorHandler } from "./customErrorHandler.js";

export const verifyToken = (req, res, next) => {
  // check if the user is authenticated before update (verify user token)
  const token = req.cookies.access_token;
  if (!token) return next(customErrorHandler(401, "Unauthorized"));
  // check if token is valid
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(customErrorHandler(403, "Token is invalid"));
    req.user = user;
    next();
  });
};
