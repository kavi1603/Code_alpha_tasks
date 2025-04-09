const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 150 },
    { id: 3, name: "Product 3", price: 200 }
];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    cartCount.textContent = cart.length;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

if (productList) {
    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `<h3>${product.name}</h3><p>$${product.price}</p><button onclick="addToCart(${product.id})">Add to Cart</button>`;
        productList.appendChild(div);
    });
}

updateCartCount();
