import { StatusCodes } from "http-status-codes";
import User, { IUser } from "../models/user";
import {
  BadRequestError,
  NotFoundError,
} from "../errors/index";


const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, email, address, city, country } = req.body;

    if (!firstName || !lastName || !email || !address || !city || !country) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: new BadRequestError("Please fill all the data!").message,
      });
    }
  
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: new NotFoundError("User not found!").message,
      });
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.address = address;
    user.city = city;
    user.country = country;

    await user.save();

    return res.status(StatusCodes.OK).json(user);
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: new BadRequestError("Something went wrong! Contact the Admin").message,
    });
  }
};

export { updateUser };
