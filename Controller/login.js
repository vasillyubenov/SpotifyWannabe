(function() {
    let loginMail = document.getElementById("login-email");
    let loginPassword = document.getElementById("login-password");
    let loginBTN = document.getElementById("log-in-btn");
    let goToRegBTN = document.getElementById("go-to-reg-btn");
    goToRegBTN.addEventListener("click", function(){
        location.hash = "register";
    });

    loginBTN.addEventListener("click", function(){
        if(loginMail.value === "" || loginPassword.value === ""){
            alert("You have missed line to fill!");
        }
        else if(!userManager.verifyUser(loginMail.value, loginPassword.value)){
            alert("Wrong credentials try again!");
        }
        else{
            guest = userManager.getUser(loginMail.value);
            location.hash = "home";
        }
    });
})();