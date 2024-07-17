import {
  getUsers,
  updateUser,
} from "../controllers/usersController.js";
import express from 'express'
const router = express.Router();
import { verifyToken } from "../middlewares/verifyToken.js";
import { authenticateUser } from "../middlewares/authenticateUser.js";

//router.use(verifyToken);
router.put("/updateUser", authenticateUser, updateUser);
router.get("/getUser", getUsers);

export { router };
