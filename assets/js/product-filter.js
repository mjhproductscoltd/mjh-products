document.addEventListener("DOMContentLoaded",()=>{

const search=document.getElementById("productSearch");
const filter=document.getElementById("categoryFilter");

if(!search || !filter) return;

function applyFilter(){

const keyword=search.value.toLowerCase();
const category=filter.value;

document.querySelectorAll(".card").forEach(card=>{

const text=card.innerText.toLowerCase();

const matchText=text.includes(keyword);

const matchCategory=
category==="all" ||
text.includes(category.toLowerCase());

card.style.display=
(matchText && matchCategory)
? "block"
: "none";

});

}

search.addEventListener("keyup",applyFilter);
filter.addEventListener("change",applyFilter);

});
