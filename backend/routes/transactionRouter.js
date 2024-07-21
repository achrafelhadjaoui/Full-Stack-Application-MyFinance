import express from 'express'
import { postTransaction, updateTransaction, deleteOne } from '../controllers/transactionController.js'
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

router.post('/posttransaction/:id', verifyToken, postTransaction);
router.put('/updatetransaction/:id', verifyToken, updateTransaction);
router.delete('/deletetransaction/:id', verifyToken, deleteOne);

export {router}