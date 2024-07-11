import {
  updateUser,
} from "../controllers/usersController.js";
import express from 'express'
const router = express.Router();
import { verifyToken } from "../middlewares/verifyToken.js";

router.use(verifyToken);
router.put("/updateUser", updateUser);

export { router };
