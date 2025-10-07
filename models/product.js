const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  sku: { type: String, unique: true, sparse: true }, 
  description: String,
  price: Number,
  discount: Number,
  brand: String,
  modelNumber: String,
  category: String,
  subCategory: String,
  stock: Number,
  batchNumber: String,
  expiryDate: Date,
  images: [String],
  manufacturer: String,
  dimensions: String,
  warranty: String,
  shippingInfo: String,
  technicalDetails: Object,
  isAvailable: { type: Boolean, default: true },
});

productSchema.pre("save", function (next) {
  if (!this.sku) {
    this.sku = "SKU-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
  }
  next();
});
const Product = mongoose.model("product", productSchema);
module.exports = Product;
