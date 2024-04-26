import { Router } from "express";

import { createUser, userLogin } from "../controllers/user.controllers.js";
import { validateUser } from "../config/middleware/auth.js";

export const user = Router();

user.post("/signup", createUser);
user.post("/login", userLogin);
user.post("/logout", (req, res) => res.clearCookie().send());

user.get("/persistence", validateUser, (req, res) => {
  res.send(req.user);
});
