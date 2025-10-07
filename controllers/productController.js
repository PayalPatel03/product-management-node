const User = require("../models/userModel");
require("dotenv").config();
const passport = require("../middlewares/passportMiddleware");

module.exports.openSignupPage = (req, res) => {
  res.render("./pages/signup.ejs");
};
module.exports.loginSuccess = (req, res) => {
  req.flash("success", "login Successful");
  return res.redirect("/home");
};


module.exports.submitSignup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userinDatabase = await User.findOne({ email: email });
    if (userinDatabase) {
      return res.redirect("/signup");
    }
    await User.create({ username, email, password });
    console.log("User signed up successfully");

    return res.redirect("/login");
  } catch (err) {
    console.log(err);
   console.log(err.message);
   
  }
};

module.exports.openLoginPage = (req, res) => {
  res.render("./pages/login.ejs");
};
