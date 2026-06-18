let btn = document.querySelector(".id1");
let curr = "light"
let change = function() {
    if (curr == "light"){
        curr = "dark"
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#f5f5f5";
    } else { 
        curr = "light"
        document.body.style.backgroundColor = "#f5f5f5";
        document.body.style.color = "#121212";
    }}

btn.addEventListener("click", change);