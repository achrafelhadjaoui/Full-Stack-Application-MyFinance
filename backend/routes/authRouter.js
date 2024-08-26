import express from 'express'
const router = express.Router();
import { loginUser } from '../controllers/authController.js';
import { register } from '../controllers/authController.js';
import { validateRegister, validateLogin } from '../middlewares/validationAuth.js';

router.post('/register', validateRegister, register);
router.post('/login', validateLogin, loginUser);

export { router };