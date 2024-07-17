import express from 'express';
import { postCategorie } from '../controllers/categorieController.js';
import {verifyToken} from '../middlewares/verifyToken.js'
const routerCategorie = express.Router();

// Define the route for creating a category
routerCategorie.post('/postcategorie', verifyToken, postCategorie);

export {routerCategorie};
