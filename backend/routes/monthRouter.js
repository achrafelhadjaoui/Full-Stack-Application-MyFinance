import express from 'express';
import { postMonth, getMonth } from '../controllers/monthController.js';
import {verifyToken} from '../middlewares/verifyToken.js'
const routerMonth = express.Router();

// Define the route for creating a month
routerMonth.post('/postmonth', verifyToken, postMonth);
routerMonth.get('/getmonth', verifyToken, getMonth)

export {routerMonth};