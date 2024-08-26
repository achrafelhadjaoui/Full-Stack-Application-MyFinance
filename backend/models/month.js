import mongoose from "mongoose";

const schema = mongoose.Schema;

const monthSchema = new schema({
    nom: String,
    year: Number,
    montant: Number,
    categorie: [{
    type: schema.Types.ObjectId,
    ref: 'Categorie'
  }],
    user: {
        type: schema.Types.ObjectId,
        ref: "User"
    }
})

const Month = mongoose.model('Month', monthSchema);

export default Month;