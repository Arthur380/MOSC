var style = document.getElementById("cssMode");

if(localStorage.getItem("whiteOrDark") === "0") {
    style.href = "styles/categories_styles.css";
}else{
    style.href = "styles/categories_styles_DARK.css";
}

var body = document.getElementById("body")

if(localStorage.getItem("cursor") === "0") {
    body.style.cursor = "default";
}else{
    body.style.cursor = "text";
}
