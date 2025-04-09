const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const backendProducts = [
  { id: 1, name: "T-Shirt", price: 500 },
  { id: 2, name: "Shoes", price: 1500 },
  { id: 3, name: "Backpack", price: 1000 }
];

app.get('/api/products', (req, res) => {
  res.json(backendProducts);
});

app.post('/api/order', (req, res) => {
  const order = req.body;
  console.log("Order Received:", order);
  res.json({ message: "Order placed successfully!" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
