const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const passport = require("../middlewares/passportMiddleware");

// Redirect root to home or login
router.get("/", passport.userAuth, (req, res) => {
  res.render("pages/home", { user: req.user });
});
router.get("/home", passport.userAuth, (req, res) => {
  res.render("./pages/home", { user: req.user });
});
// Signup
router.get("/signup", authController.openSignupPage);
router.post("/signup", authController.submitSignup);

// Login
router.get("/login", authController.openLoginPage);

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  (req, res) => {
    req.flash("success", "Login successful!");
    res.redirect("/home");  // ✅ this should now exist
  }
);
// Logout
router.get("/logout", (req, res) => {
  req.logout(() => {
    req.flash("success", "Logged out successfully");
    res.redirect("/login");
  });
});

module.exports = router;
