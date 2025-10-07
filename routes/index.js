const express = require('express');
const router = express.Router();

const productRoutes=require('./productRouter');
router.use(productRoutes);
module.exports=router;