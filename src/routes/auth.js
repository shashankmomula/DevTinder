const express = require("express");
const { validateUserData } = require("../utils/validation");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  try {
    // Validate user data
    validateUserData(req);

    const { firstName, lastName, emailId, password } = req.body;
    // Encrypt user password

    const passwordHash = await bcrypt.hash(password, 10);

    console.log(passwordHash);
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });

    await user.save();
    res.send("User added suceessfully");
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId: emailId });

    if (!user) {
      throw new Error("User not found");
    }

    const isPassword = await user.validatePassword(password);
    if (isPassword) {
      //CREATE A JSON TOKEN

      const token = await user.getJWT();

      res.cookie("token", token);
      res.send("Login successfull!!");
    } else {
      throw new Error("Invalid password!!");
    }
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

authRouter.post("/logout", async (req, res) => {
  res.cookie("token", null, { expires: new Date(Date.now()) });
  res.send("Logout successful!!!!");
});

module.exports = authRouter;