import {
  getUsers,
  updateUser,
} from "../controllers/usersController.js";
import express from 'express'
const router = express.Router();
import { verifyToken } from "../middlewares/verifyToken.js";

//router.use(verifyToken);
router.put("/updateUser", verifyToken, updateUser);
router.get("/getUser", getUsers);

export { router };
