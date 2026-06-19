let cart = JSON.parse(localStorage.getItem("mjh_cart")) || [];

// ADD TO CART
function addToCart(id, name, price) {

  cart.push({ id, name, price });

  localStorage.setItem("mjh_cart", JSON.stringify(cart));

  alert(name + " added to cart ✔");
}

// VIEW CART (console/simple)
function viewCart() {
  console.log(cart);
  alert("Cart items: " + cart.length);
}

// CLEAR CART
function clearCart() {
  cart = [];
  localStorage.removeItem("mjh_cart");
  alert("Cart cleared");
}
