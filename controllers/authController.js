const User = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports.openSignupPage = (req, res) => {
  res.render("pages/signup");
};

module.exports.openLoginPage = (req, res) => {
  res.render("pages/login");
};

module.exports.submitSignup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      req.flash("error", "Email already registered");
      return res.redirect("/signup");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ username, email, password: hashedPassword });
    console.log(" User signed up successfully");

    req.flash("success", "Signup successful! Please login.");
    return res.redirect("/login");
  } catch (err) {
    console.error(" Signup error:", err.message);
    req.flash("error", "Something went wrong during signup");
    res.redirect("/signup");
  }
};

module.exports.loginSuccess = (req, res) => {
  req.flash("success", "Login successful!");
  res.redirect("/home");
};
