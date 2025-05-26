<<<<<<< HEAD
const express = require("express");
const { validateUserData } = require("../utils/validation");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  try {
    // Validate user data
    validateUserData(req);

    const { firstName, lastName, emailId, password,skills } = req.body;
    // Encrypt user password

    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });

    const savedUser = await user.save();
    const token = await savedUser.getJWT();

    res.cookie("token", token, {
      expires: new Date(Date.now() + 8 * 3600000),
    });
    res.send({ message: "User added successfully", data: savedUser });
  } catch (err) {
    res.status(400).send("ERROR: User already exists");
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

      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
      });

      res.send(user);
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
=======
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

    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });

    const savedUser = await user.save();
    const token = await savedUser.getJWT();

    res.cookie("token", token, {
      expires: new Date(Date.now() + 8 * 3600000),
    });
    res.send({ message: "User added successfully", data: savedUser });
  } catch (err) {
    res.status(400).send("ERROR: User already exists");
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

      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
      });

      res.send(user);
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
>>>>>>> afe28b91efe077d6e038f131a6dc1695a2927a94
