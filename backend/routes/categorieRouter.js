import express from 'express';
import { postCategorie, getCategories } from '../controllers/categorieController.js';
import {verifyToken} from '../middlewares/verifyToken.js'
const routerCategorie = express.Router();

// Define the route for creating a category
routerCategorie.post('/postcategorie/:id', verifyToken, postCategorie);
routerCategorie.get('/getcategories/:id', verifyToken, getCategories);

export {routerCategorie};
