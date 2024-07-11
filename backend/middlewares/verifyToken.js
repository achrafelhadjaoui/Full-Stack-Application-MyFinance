import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../errors/index";
import { StatusCodes } from "http-status-codes";


function verifyToken(req, res, next) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new UnauthorizedError("No token provided");
    }
    const token = authorization.split(" ")[1];
    if (!token) {
      throw new UnauthorizedError("No token provided");
    }

    const payload = jwt.verify(token, "user_key");
    req.user = payload.user;
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
}

export { verifyToken };
////////////////////////////////////////////////////////////need chek
