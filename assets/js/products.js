fetch('../data/products.json')
.then(response => response.json())
.then(data => {

const container =
document.getElementById('productGrid');

if (!container) return;

data.products.forEach(product => {

const card =
document.createElement('div');

card.className = 'card';

card.innerHTML = `
<img
src="${product.image}"
alt="${product.name}"
onerror="this.src='assets/images/products/placeholder.png';"
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
onclick="addToCart(
'${product.id}',
'${product.name}',
'${product.price}'
)"
class="cart-btn">
Add To Cart
</button>

<button
onclick="openOrder(
'${product.id}',
'${product.name}',
'${product.price}'
)"
class="order-btn">
Buy Now
</button>
`;

container.appendChild(card);

});

})
.catch(error => {
console.error(error);
});

/* CART SYSTEM */

function addToCart(
id,
name,
price
){

let cart =
JSON.parse(
localStorage.getItem("mjh_cart")
) || [];

let existing =
cart.find(
item => item.id === id
);

if(existing){

existing.qty =
(existing.qty || 1) + 1;

}else{

cart.push({
id:id,
name:name,
price:price,
qty:1
});

}

localStorage.setItem(
"mjh_cart",
JSON.stringify(cart)
);

alert(
name +
" added to cart. Qty: " +
(
existing
? existing.qty
: 1
)
);

}

/* BUY NOW */

function openOrder(
id,
name,
price
){

const phone =
"966550171314";

const message =
encodeURIComponent(
`🛒 MJH PRODUCTS ORDER

Product ID: ${id}

Product Name: ${name}

Price: ${price}

Please confirm availability.

Thank you.`
);

window.open(
`https://wa.me/${phone}?text=${message}`,
"_blank"
);

}
