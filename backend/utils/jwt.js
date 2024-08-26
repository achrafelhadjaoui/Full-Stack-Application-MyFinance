import jwt from "jsonwebtoken";

function generateToken(payload, user_key) {
  const token = jwt.sign(payload, user_key, {
    expiresIn: "6d",
  });

  return token;
}

export default generateToken;
