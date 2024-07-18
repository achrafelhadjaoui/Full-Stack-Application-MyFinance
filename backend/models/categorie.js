import mongoose from "mongoose";
const Schema = mongoose.Schema;

let CategorieSchma = new Schema({
    nom: String,
    budget: Number,
    montant: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    transaction: [{
        type: Schema.Types.ObjectId,
        ref: 'Transaction'
    }]
})

const Categorie = mongoose.model('Categorie', CategorieSchma);
export default Categorie;