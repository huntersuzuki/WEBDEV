var emailvalidation = () => {

    var email,str;
    email = document.getElementById("emailid");
    str = email.value;
    str = str.match(/^([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/gm);
    

    if(str === null){
        email.setCustomValidity("Invalid email :- \n *Email should contain a special character. \n *Email should contain a domain name.\n  ");
        email.style.outlineColor="red";
    }
    else{
        email.setCustomValidity("");
        email.style.outlineColor="green";
    }
}

var passwordvalidation = () => {

    var password,str;
    password = document.getElementById("passid");
    str = password.value;
    str = str.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);

    if(str == null){
        password.setCustomValidity("invalid password :-\n* Password must contain 8 or more characters\n* Password must contain atlest one uppercase letter\n* Password must contain atleast one special character");
        password.style.outlineColor="red";
    }
    else{
        password.setCustomValidity("");
        password.style.outlineColor="green";
    }
}

var mobilenumbervalidation = () => {

    var mobile ,str;
    mobile = document.getElementById("mobid");
    str = mobile.value;
    str = str.match(/^(\+\d{1,3}[- ]?)?\d{10}$/);

    if(str == null){
       mobile.setCustomValidity("Invalid number :- \n *The number must contain 10 digits. \n *The number must contain valid country code(optional). \n *The number must not contain any spaces in between. \n *The number should not be text.");
       mobile.style.outlineColor="red";
    }
    else{
        mobile.setCustomValidity("");
        mobile.style.outlineColor="green";
    }

}