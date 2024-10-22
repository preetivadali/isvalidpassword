 function isValidPassword(username, password){
    if (password.length < 8){ 
       return false;
    } // be atleast 8 characters
    if (password.includes(" ")) {
        return false;
    }//  cannot contain spaces 
   else {return true;
   }
   if (password.toLowerCase().includes(username.toLowerCase())) {
    return false;
}
return true;
}


console.log(isValidPassword("Preeti" , "preeti567"));
