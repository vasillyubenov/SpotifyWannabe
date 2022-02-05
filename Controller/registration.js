(function(){
    let regMail = document.getElementById("reg-email");
    let confirmMail = document.getElementById("confirm-email");
    let regUser = document.getElementById("reg-username");
    let regPass = document.getElementById("reg-password");
    let birthDay = document.getElementById("day");
    let birthMonth = document.getElementById("month");
    let birthYear = document.getElementById("year");
    let maleRad = document.getElementById("male-rad");
    let femaleRad = document.getElementById("female-rad");
    
    let singUpBTN = document.getElementById("sign-up-btn");
    singUpBTN.addEventListener("click", function(){
        if(regMail.value == "" || confirmMail.value == "" || regUser.value == "" || regPass.value == "" ||  birthDay.value == "" ||
           birthYear.value == "" || Number.isNaN(birthDay.value) || Number.isNaN(birthYear.value) || (!femaleRad.checked && !maleRad.checked)){
             alert("Wrong credentials!");
        }
        else if(regMail.value !== confirmMail.value){
            alert("Your mails do not match!");
        }
        else if(userManager.existing(regMail.value, regUser.value)){
            alert("A user with the same email already exist!");
        }
        else{
            let gender = "Male";
            if(femaleRad.checked){
                gender = "Female";
            }
            userManager.addUser(regMail.value, regPass.value, regUser.value, gender, new Birthdate(birthDay.value, birthMonth.value, birthYear.value));
            userManager.updateAccounts();
            //reset the inputs 
            regMail.value = "";
            regPass.value = "";
            regUser.value = "";
            confirmMail.value = "";
            birthDay.value = "";
            maleRad.checked = false;
            femaleRad.checked = false;
            birthMonth.value = "January";
            birthYear.value = "";
            
            location.hash = "login";
        }
    });
})();