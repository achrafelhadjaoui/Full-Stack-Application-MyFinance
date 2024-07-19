import Categorie from "../models/categorie.js";
import Month from "../models/month.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthorizedError } from "../errors/index.js";

const postCategorie = async (req, res) => {
  try {
    // Check if the token exists
    if (!req.user || !req.user._id) {
      throw new UnauthorizedError("Not authorized");
    }

    const monthId = req.params.id;
    const month = await Month.findOne({ _id: monthId });
    if (!month) throw new BadRequestError("month not found");

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
      month: monthId, // Assign the current user's _id to the category's user field
    });

    await newCategorie.save();

    month.categorie.push(newCategorie._id);
    await month.save();

    return res.status(StatusCodes.CREATED).json({ newCategorie });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

const getCategories = async (req, res) => {
  try {
    // Check if the token exists
    if (!req.user || !req.user._id) {
      throw new UnauthorizedError("Not authorized");
    }

    const monthId = req.params.id;
    const month = await Month.findOne({ _id: monthId });
    if (!month) throw new BadRequestError("month not found");

    // Check if the category not exist
    const existingCategorie = await Categorie.find({ month: monthId });
    if (!existingCategorie) {
      throw new BadRequestError("Categories not found");
    }

    return res.status(StatusCodes.OK).json({ existingCategorie });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

export { postCategorie, getCategories };
