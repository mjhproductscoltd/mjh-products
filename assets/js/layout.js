document.addEventListener("DOMContentLoaded", function () {
    fetch("menu_block.html")
        .then(res => res.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
        })
        .catch(err => console.log("Menu load error:", err));
});
