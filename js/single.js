var style = document.getElementById("cssMode");
var submit = document.getElementById("submit");

if(localStorage.getItem("whiteOrDark") === "0") {
    style.href = "styles/single_styles.css";
}else{
    style.href = "styles/single_styles_DARK.css";
}

var body = document.getElementById("body")

if(localStorage.getItem("cursor") === "0") {
    body.style.cursor = "default";
}else{
    body.style.cursor = "text";
}


submit.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("experienceDone", "true");
    const startTime = localStorage.getItem("startExperience");
    const endTime = new Date().getTime().toString();

    const totalTime = (endTime - startTime) /1000;

    const cursor = localStorage.getItem("cursor");
    const whiteOrDark = localStorage.getItem("whiteOrDark");

    const lumineux = localStorage.getItem("lumineux");
    const internet_experience = localStorage.getItem("internet_experience");
    const age = localStorage.getItem("age");
    const materiel = localStorage.getItem("materiel");
    const consent_1 = localStorage.getItem("consent_1");
    const consent_2 = localStorage.getItem("consent_2");
    const consent_3 = localStorage.getItem("consent_3");



    const dataToSave = {"time": totalTime, "cursor": cursor, "whiteOrDark": whiteOrDark, "lumineux": lumineux,
        "internet_experience": internet_experience, "age": age, "materiel": materiel, "consent_1": consent_1,
        "consent_2": consent_2, "consent_3": consent_3};

    savedata(dataToSave);

    localStorage.setItem("timeResult", totalTime);
    document.location.href = "remerciement.html";
    document.reload();
})

function savedata (data) {

    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = "/m1-miashs-2021-s1/Zef0eehu/savedata.php";

    // open a connection
    xhr.open ("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader ("Content-Type", "application/json");

    // Sending data with the request
    xhr.send (JSON.stringify (data));
}
