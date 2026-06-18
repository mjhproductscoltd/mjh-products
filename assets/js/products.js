fetch('data/products.json')
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById('productGrid');

    if (!container) return;

    if (!data.products || data.products.length === 0) {
      container.innerHTML = `
        <div class="card">
          <h3>No Products Available</h3>
          <p>Products will be added soon.</p>
        </div>
      `;
      return;
    }

    data.products.forEach(product => {

      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img
          src="${product.image}"
          alt="${product.name}"
          onerror="this.src='assets/images/products/placeholder.png';"
          style="
            width:100%;
            height:220px;
            object-fit:cover;
            border-radius:10px;
          "
        >

        <h3>${product.name}</h3>

        <p>
          <strong>Category:</strong>
          ${product.category}
        </p>

        <p>
          <strong>Price:</strong>
          ${product.price}
        </p>

        <button
          onclick="orderProduct('${product.id}','${product.name}')"
          class="order-btn"
        >
          Order via WhatsApp
        </button>
      `;

      container.appendChild(card);

    });

    console.log(
      data.products.length +
      " products loaded successfully."
    );

  })
  .catch(error => {

    console.error(error);

    const container =
      document.getElementById('productGrid');

    if (container) {

      container.innerHTML = `
        <div class="card">
          <h3>Loading Error</h3>
          <p>
            Unable to load product data.
          </p>
        </div>
      `;

    }

  });


function orderProduct(id, name) {

  const phone = "966550171314";

  const message = encodeURIComponent(
`Hello MJH Products,

I am interested in this product.

Product ID: ${id}
Product Name: ${name}

Please provide details.

Thank you.`
  );

  window.open(
    `https://wa.me/${phone}?text=${message}`,
    "_blank"
  );

}
