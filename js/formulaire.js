function submitFormulaire() {

    if(!localStorage.getItem("experienceDone")){
        sessionStorage.setItem("age", document.getElementsByName("age")[0].value);

        var internet_experience = document.getElementsByName('internet_experience');
        var lumineux = document.getElementsByName('lumineux');
        var materiel = document.getElementsByName('materiel');
        var consent_1 = document.getElementsByName('consent_1');
        var consent_2 = document.getElementsByName('consent_2');
        var consent_3 = document.getElementsByName('consent_3');


        localStorage.setItem("whiteOrDark", Math.floor(Math.random() * 2)+"");


        for(i = 0; i < internet_experience.length; i++) {
            if(internet_experience[i].checked)
                sessionStorage.setItem("internet_experience", internet_experience[i].value);
        }

        for(i = 0; i < lumineux.length; i++) {
            if(lumineux[i].checked)
                sessionStorage.setItem("lumineux", lumineux[i].value);
        }

        for(i = 0; i < materiel.length; i++) {
            if(materiel[i].checked)
                sessionStorage.setItem("materiel", materiel[i].value);
        }

        for(i = 0; i < consent_1.length; i++) {
            if(consent_1[i].checked)
                sessionStorage.setItem("consent_1", consent_1[i].value);
        }

        for(i = 0; i < consent_2.length; i++) {
            if(consent_2[i].checked)
                sessionStorage.setItem("consent_2", consent_2[i].value);
        }

        for(i = 0; i < consent_3.length; i++) {
            if(consent_3[i].checked)
                sessionStorage.setItem("consent_3", consent_3[i].value);
        }
    }
}
