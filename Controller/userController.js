let userManager = (function(){
    class Manager{
        constructor(){
            this.users = [];
            if(!localStorage.getItem("users")){
                let users = [new User("vasko47@abv.bg", "123", "VasetoKaiba", "Male", new Birthdate("9","November", "2001"))];
                localStorage.setItem("users", JSON.stringify(users));
            }
            this.users = JSON.parse(localStorage.getItem("users"));
        }

        existing(email){
            return this.users.some(user => user.email === email);
        }

        updateAccounts(){
            localStorage.setItem("users", JSON.stringify(this.users));
        }

        verifyUser(email_username, password){
            return this.users.some(user => (user.email === email_username || user.username === email_username) && user.password === password);
        }

        addUser(email, password, username, gender, birthdate){
            if(!this.existing(email)){
                this.users.push(new User(email, password, username, gender, birthdate));
                //update the accounts 
                this.updateAccounts();
            }
        }

        getUser(email_username){
            for(let i = 0; i < this.users.length; i++){
                if(this.users[i].username === email_username || this.users[i].username === email_username){
                    return this.users[i];
                }
            }
        }
    }
    return new Manager();
})();
    
