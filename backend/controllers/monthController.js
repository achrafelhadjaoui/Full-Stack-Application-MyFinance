import Month from "../models/month.js";
import User from "../models/user.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthorizedError, NotFoundError } from "../errors/index.js";

const postMonth = async (req, res) => {
  try {
    // Check if the token exists
    if (!req.user || !req.user._id) {
      throw new UnauthorizedError("Not authorized");
    }

    const userId = req.user._id;
    const { montant } = req.body;

    // Validate required fields
    if (!montant) {
      throw new BadRequestError("Please provide all required fields");
    }

    const now = new Date();
    const monthName = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();

    // Check if the month and year already exist for this user
    const existingMonth = await Month.findOne({ nom: monthName, year, user: userId });
    if (existingMonth) {
      throw new BadRequestError("Month already exists");
    }

    // Create new month
    const newMonth = new Month({
      nom: monthName,
      year,
      montant,
      user: userId,
    });

    await newMonth.save();

    // Add the new month's _id to the user's month array
    const user = await User.findOne({ _id: userId });
    if (!user) {
      throw new BadRequestError("User not found");
    }

    user.month.push(newMonth._id);
    await user.save();

    return res.status(StatusCodes.CREATED).json({ newMonth });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

const getMonth = async (req, res) => {
  try {
    // Check if the token exists
    if (!req.user || !req.user._id) {
      throw new UnauthorizedError("Not authorized");
    }

    const userId = req.user._id;
    const now = new Date();
    const monthName = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();

    // Find the current month and year for this user
    const currentMonth = await Month.findOne({ nom: monthName, year, user: userId });
    if (!currentMonth) {
      throw new NotFoundError("Month not found");
    }

    return res.status(StatusCodes.OK).json({ currentMonth });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

export { postMonth, getMonth };
