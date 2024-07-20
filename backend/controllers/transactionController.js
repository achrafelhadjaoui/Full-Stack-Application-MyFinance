import Transaction from "../models/transaction.js";
import Categorie from "../models/categorie.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthorizedError } from "../errors/index.js";

const postTransaction = async (req, res) => {
  try {
    if (!req.user || !req.user._id) throw new UnauthorizedError("Unauthorized");

    const categoryId = req.params.id;

    const { type, montant, typeCategorie } = req.body;
    if (!type || !montant || !typeCategorie)
      throw new BadRequestError("fill all the data");

    const categorie = await Categorie.findOne({
      _id: categoryId,
      nom: typeCategorie
    });
    if (!categorie) throw new BadRequestError("categorie not found");

    const transaction = new Transaction({
      type,
      montant,
      typeCategorie,
      categorie: categoryId,
    });

    await transaction.save();

    categorie.transaction.push(transaction._id);
    await categorie.save();

    return res.status(StatusCodes.CREATED).json({ transaction });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

const updateTransaction = async (req, res) => {
  try {
    if (!req.user || !req.user._id) throw new UnauthorizedError("Unauthorized");

    const transactionId = req.params.id;
    const { type, montant } = req.body;

    if (!type || !montant) throw new BadRequestError("fii all the data");

    // check if the transaction exist
    const transaction = await Transaction.findOne({ _id: transactionId });
    if (!transaction) throw new BadRequestError("Transaction not found");

    transaction.type = type;
    transaction.montant = montant;

    await transaction.save();

    return res.status(StatusCodes.OK).json({ transaction });
  } catch (error) {
    const statusCode = error.StatusCodes || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

const deleteOne = async (req, res) => {
  try {
    if (!req.user || !req.user._id) throw new UnauthorizedError("Unauthorized");

    const transactionId = req.params.id;

    // check if the transaction exist
    const transaction = await Transaction.findOne({ _id: transactionId });
    if (!transaction) throw new BadRequestError("Transaction not found");

    const deleteTransaction = await Transaction.deleteOne({
      _id: transactionId,
    });

    return res.status(StatusCodes.OK).json({ deleteTransaction });
  } catch (error) {
    const statusCode = error.StatusCodes || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

export { postTransaction, updateTransaction, deleteOne };
