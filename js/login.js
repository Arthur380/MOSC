var username = document.getElementById("username");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
var input = document.getElementById("submit")
var body = document.getElementById("body")
var form = document.getElementById("form");
var connexion = document.getElementById("connexion");
var submit = document.getElementById("submit");

if(localStorage.getItem("whiteOrDark") === "0"){
    input.classList.add("white");
    body.classList.add("white");
    form.classList.add("white");
    connexion.classList.add("white");
    username.classList.add("white");
    password.classList.add("white");
    confirmPassword.classList.add("white");
}else{
    input.classList.add("black");
    body.classList.add("black");
    form.classList.add("black");
    connexion.classList.add("black");
    username.classList.add("black");
    password.classList.add("black");
    confirmPassword.classList.add("black")
}

if(localStorage.getItem("cursor") === "0") {
    body.style.cursor = "default";
}else{
    body.style.cursor = "text";
}



submit.addEventListener("click", (e) => {
    e.preventDefault();
    const usernameForm = form.username.value;
    const passwordForm = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (usernameForm !== "" && passwordForm === confirmPassword && passwordForm !== "" && confirmPassword !== "") {
        document.location.href = "home.html";
        document.reload();
    } else {
        alert("Les champs sont mal renseignés, assurez-vous que les mots de passes correspondent");
    }
})
