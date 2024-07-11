import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String, required: false },
  city: { type: String, required: false },
  country: { type: String, required: false },
});

export default model("User", userSchema);
