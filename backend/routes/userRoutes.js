import {
    updateUser,
  } from "../controllers/usersController";
  import { Router } from "express";
  import { verifyToken } from "../middlewares/verifyToken";
  
  const routerUsers = Router();
  
  routerUsers.use(verifyToken);
  routerUsers.put("/updateUserRole/:_id", updateUser);
  
  export { routerUsers };