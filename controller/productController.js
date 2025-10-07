const Product = require("../models/product")

// Add Product Page
module.exports.addProductPage = (req, res) => {
    res.render('pages/addProduct')
}

// View Product Table
module.exports.tablePage = async (req, res) => {
    let product = await Product.find()
    res.render('pages/viewProduct', { product })
}

// Add Product
module.exports.addProduct = async (req, res) => {
    try {
        await Product.create(req.body)
        res.redirect('/table')
    } catch (error) {
        console.log(error.message)
        res.redirect('/addProduct')
    }
}

// ======================
// Edit Product Page
module.exports.editProductPage = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) return res.redirect('/table')
        res.render('pages/editProduct', { product })
    } catch (error) {
        console.log(error.message)
        res.redirect('/table')
    }
}

// Update Product
module.exports.updateProduct = async (req, res) => {
    try {
        await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.redirect('/table')
    } catch (error) {
        console.log(error.message)
        res.redirect(`/editProduct/${req.params.id}`)
    }
}

// Delete Product
module.exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.redirect('/table')
    } catch (error) {
        console.log(error.message)
        res.redirect('/table')
    }
}
