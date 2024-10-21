 function isValidPassword(username, password){
    if (password.length < 8){
       return false;
    }
    if (password.includes(" ")) {
        return false;
    }
   else return true;
}
console.log(isValidPassword("use12345" , "pass1234"));