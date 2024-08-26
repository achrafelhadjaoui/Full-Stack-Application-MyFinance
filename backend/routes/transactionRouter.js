import express from 'express'
import { postTransaction, updateTransaction, deleteOne, getTransaction} from '../controllers/transactionController.js'
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

router.post('/posttransaction', verifyToken, postTransaction);
router.get('/gettransaction/:id', verifyToken, getTransaction);
router.put('/updatetransaction/:id', verifyToken, updateTransaction);
router.delete('/deletetransaction/:id', verifyToken, deleteOne);

export {router}