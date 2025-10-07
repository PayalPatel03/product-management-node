const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

  router.get('/', redirectTohomePage);
router.get('/signup', productController.openSignupPage);
router.post('/signup', productController.submitSignup);
router.get('/login', blogController.openLoginPage);
router.post("/login",passport.authenticate("local", 
            {
                failureRedirect:"/login", 
                failureFlash:"login Failed"
            }
        ), 
            productController.loginSuccess
        );