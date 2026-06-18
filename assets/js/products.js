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
        >

        <h3>${product.name}</h3>

        <p><strong>Category:</strong> ${product.category}</p>

        <p><strong>Price:</strong> ${product.price}</p>

        <button onclick="openOrder('${product.id}', '${product.name}', '${product.price}')">
          Order Now
        </button>
      `;

      container.appendChild(card);

    });

    console.log(data.products.length + " products loaded successfully.");

  })
  .catch(error => {

    console.error(error);

    const container = document.getElementById('productGrid');

    if (container) {
      container.innerHTML = `
        <div class="card">
          <h3>Loading Error</h3>
          <p>Unable to load product data.</p>
        </div>
      `;
    }

  });

/* =========================
   ORDER SYSTEM (FINAL)
========================= */

function openOrder(id, name, price) {

  const phone = "966550171314";

  const message = encodeURIComponent(
`🛒 MJH PRODUCTS ORDER

Product ID: ${id}
Product Name: ${name}
Price: ${price}

Please confirm availability and delivery details.

Thank you.`
  );

  const whatsappURL = `https://wa.me/${phone}?text=${message}`;

  const paymentInfo = `
💳 PAYMENT OPTIONS:

bKash: 01XXXXXXXXX  
Nagad: 01XXXXXXXXX  
Rocket: 01XXXXXXXXX  
Bank: MJH Products Co. Ltd

Click OK to continue WhatsApp order.
`;

  alert(paymentInfo);

  window.open(whatsappURL, "_blank");
}
