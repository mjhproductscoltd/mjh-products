fetch('data/products.json')
.then(r=>r.json())
.then(data=>{

const grid=document.getElementById("featuredProducts");

if(!grid)return;

let html="";

data.products.slice(0,12).forEach(p=>{

html+=`
<div class="card">
<img src="${p.image}"
style="width:100%;height:180px;object-fit:cover;"
onerror="this.src='assets/images/products/placeholder.png'">

<h3>${p.name}</h3>

<p>${p.category}</p>

<p><strong>${p.price}</strong></p>

<a href="products/index.html" class="btn primary">
View Product
</a>

</div>
`;

});

grid.innerHTML=html;

});
