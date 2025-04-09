const products = [
    { id: 1, name: "T-Shirt", price: 500 },
    { id: 2, name: "Shoes", price: 1500 },
    { id: 3, name: "Backpack", price: 1000 }
  ];
  
  const cart = [];
  
  window.onload = () => {
    const productList = document.getElementById('products');
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.innerHTML = `${product.name} - Rs. ${product.price} <button onclick="addToCart(${product.id})">Add to Cart</button>`;
      productList.appendChild(productDiv);
    });
  
    document.getElementById('checkoutBtn').addEventListener('click', checkout);
  };
  
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    displayCart();
  }
  
  function displayCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - Rs. ${item.price}`;
      cartList.appendChild(li);
    });
  }
  
  function checkout() {
    alert("Order placed successfully!");
    cart.length = 0;
    displayCart();
  }
  