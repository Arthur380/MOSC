function beginExperience(){
    const currentTime = new Date().getTime().toString();

    localStorage.setItem("startExperience", currentTime);

    document.location.href = "login.html";
    document.reload();
}
