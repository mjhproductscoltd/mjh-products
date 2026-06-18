fetch('data/products.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("productGrid");

    data.products.forEach(product => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${product.image}" style="width:100%; border-radius:8px;">
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <p><b>${product.price}</b></p>
        <button onclick="orderProduct('${product.id}')">Order</button>
      `;

      container.appendChild(card);
    });
  });

function orderProduct(id) {
  alert("Order placed for: " + id);
}
