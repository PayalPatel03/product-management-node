const express = require("express");
const db = require("./configs/database");
const port = 8081;
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("./middlewares/passportMiddleware");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));


app.use(
  session({
    secret: process.env.SESSION_SECRET || "secretkey",
    resave: false,
    saveUninitialized: false,
  })
);


app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
app.use(passport.flashMiddleware);


app.use("/", authRoutes);


app.listen(port, (err) => {
  if (!err) {
    db(); 
    console.log("Server Started");
    console.log(`http://localhost:${port}`);
  } else {
    console.error(" Server error:", err);
  }
});
