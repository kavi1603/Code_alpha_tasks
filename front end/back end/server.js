// /backend/server.js (Express.js Backend)
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect("mongodb://localhost:27017/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Import Routes
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// /backend/models/Product.js (Product Model)
const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    stock: Number
});
module.exports = mongoose.model("Product", ProductSchema);

// /backend/models/Order.js (Order Model)
const OrderSchema = new mongoose.Schema({
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    total: Number,
    date: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Order", OrderSchema);

// /backend/routes/productRoutes.js (Product Routes)
const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

router.post("/add", async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json({ message: "Product added" });
});

module.exports = router;

// /backend/routes/orderRoutes.js (Order Routes)
const Order = require("../models/Order");
router.post("/create", async (req, res) => {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.json({ message: "Order placed" });
});

module.exports = router;

// /backend/database/db.js (Database Connection)
const mongoose = require("mongoose");
const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/ecommerce", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected");
    } catch (error) {
        console.log("Database connection error", error);
    }
};
module.exports = dbConnect;
