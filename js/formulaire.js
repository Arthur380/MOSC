function submitFormulaire() {

    if(!localStorage.getItem("experienceDone")){

        var age = document.getElementsByName("age")[0].value;
        var internet_experience = document.getElementsByName('internet_experience');
        var lumineux = document.getElementsByName('lumineux');
        var materiel = document.getElementsByName('materiel');
        var consent_1 = document.getElementsByName('consent_1');
        var consent_2 = document.getElementsByName('consent_2');
        var consent_3 = document.getElementsByName('consent_3');

        if (document.querySelector('input[name="internet_experience"]:checked') == null  || document.querySelector('input[name="lumineux"]:checked') == null || document.querySelector('input[name="consent_1"]:checked') == null || document.querySelector('input[name="consent_2"]:checked') == null || document.querySelector('input[name="consent_3"]:checked') == null){
            alert("Vous devez compléter tous les champs avant de passer à la suite");
        }else {
            localStorage.setItem("age", age);
            localStorage.setItem("whiteOrDark", Math.floor(Math.random() * 2) + "");
            localStorage.setItem("cursor", Math.floor(Math.random() * 2) + "");


            for (i = 0; i < internet_experience.length; i++) {
                if (internet_experience[i].checked)
                    localStorage.setItem("internet_experience", internet_experience[i].value);
            }

            for (i = 0; i < lumineux.length; i++) {
                if (lumineux[i].checked)
                    localStorage.setItem("lumineux", lumineux[i].value);
            }

            for (i = 0; i < materiel.length; i++) {
                if (materiel[i].checked)
                    localStorage.setItem("materiel", materiel[i].value);
            }

            for (i = 0; i < consent_1.length; i++) {
                if (consent_1[i].checked)
                    localStorage.setItem("consent_1", consent_1[i].value);
            }

            for (i = 0; i < consent_2.length; i++) {
                if (consent_2[i].checked)
                    localStorage.setItem("consent_2", consent_2[i].value);
            }

            for (i = 0; i < consent_3.length; i++) {
                if (consent_3[i].checked)
                    localStorage.setItem("consent_3", consent_3[i].value);
            }
            document.location.href = "consigne.html";
            document.reload();
        }
    }else{
        alert("L'experience a déja été réalisée, vous ne pouvez pas la refaire");
    }
}
