import Categorie from "../models/categorie.js";
import User from "../models/user.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const postCategorie = async (req, res) => {
  try {
    // Check if the token exists
    if (!req.user || !req.user._id) {
      throw new BadRequestError("No token provided");
    }

    const userId = req.user._id;

    const { nom, budget, montant } = req.body;

    // Validate required fields
    if (!nom || !budget || !montant) {
      throw new BadRequestError("Please provide all required fields");
    }

    // Check if the category already exists
    const existingCategorie = await Categorie.findOne({ nom });
    if (existingCategorie) {
      throw new BadRequestError("Category already exists");
    }

    // Create new category
    const newCategorie = new Categorie({
      nom,
      budget,
      montant,
      user: userId, // Assign the current user's _id to the category's user field
    });

    await newCategorie.save();

    // Add the new category's _id to the user's categorie array
    const user = await User.findOne({ _id: userId });
    if (!user) {
      throw new BadRequestError("User not found");
    }

    user.categorie.push(newCategorie._id);
    await user.save();

    return res.status(StatusCodes.CREATED).json({ newCategorie });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

export { postCategorie };
