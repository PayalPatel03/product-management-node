const { Router } = require("express");
const dashboardCtl = require('../controller/dashboardController')
const authCtl = require('../controller/authController')
const pdtCtl = require('../controller/productController')
const router = Router()

router.get('/', dashboardCtl.homePage)

// Auth
router.get('/login', authCtl.loginPage)
router.get('/register', authCtl.registerPage)

// Product
router.get('/addProduct', pdtCtl.addProductPage)
router.post('/addProduct', pdtCtl.addProduct)
router.get('/table', pdtCtl.tablePage)

// ======================
// Edit Product
router.get('/editProduct/:id', pdtCtl.editProductPage)
router.post('/editProduct/:id', pdtCtl.updateProduct)

// Delete Product
router.get('/deleteProduct/:id', pdtCtl.deleteProduct)

module.exports = router
