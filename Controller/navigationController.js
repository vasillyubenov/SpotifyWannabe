(function(){
    let preHome = document.getElementById("pre-home");
    let regPage = document.getElementById("registation-page");
    let loginPage = document.getElementById("login");
    let homePage = document.getElementById("home");

    let renderPage = function(){
        let hash = location.hash.slice(1);
        switch(hash){
            case "pre-home": case "":{
                preHome.style.display = "block";
                regPage.style.display = "none";
                loginPage.style.display = "none";
                homePage.style.display = "none";
            }
            break;
            case "register":{
                preHome.style.display = "none";
                regPage.style.display = "flex";
                loginPage.style.display = "none";
                homePage.style.display = "none";
            }
            break;
            case "login":{
                preHome.style.display = "none";
                regPage.style.display = "none";
                loginPage.style.display = "flex";
                homePage.style.display = "none";
            }
            break;
            case "home":{
                preHome.style.display = "none";
                regPage.style.display = "none";
                loginPage.style.display = "none";
                homePage.style.display = "flex";
            }
            break;
            default:{
            }
            break;
        }
    }

    window.addEventListener("load", function(){
        renderPage();
    });

    window.addEventListener("hashchange", function(){
        renderPage();
    })
})();