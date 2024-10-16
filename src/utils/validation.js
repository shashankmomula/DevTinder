const validator = require("validator");

const validateUserData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Name is invalid!");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Email is invalid!");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Enter a strong password!");
  }
};

const validateEditProfileData = (req) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "age",
    "skills",
    "about",
    "photoUrl",
    "gender",
  ];

  const isAllowed = Object.keys(req.body).every((key) => allowedEditFields.includes(key));

  return isAllowed;
};
module.exports = { validateUserData,validateEditProfileData };
