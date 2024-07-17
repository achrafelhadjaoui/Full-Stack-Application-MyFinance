import mongoose from "mongoose";
const Schema = mongoose.Schema;

let TransactionSchma = new Schema(
  {
    type: String,
    montant: Number,
    typeCategorie: String,
    categorie: {
      type: Schema.Types.ObjectId,
      ref: 'Categorie',
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchma);
export default Transaction;
