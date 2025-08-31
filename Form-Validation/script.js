let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#validation-form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._-])\S{8,}$/;

    document.querySelector("#email-error").textContent = "";
    document.querySelector("#password-error").textContent = "";

    let emailAns = emailRegex.test(email.value);
    let passwordAns = passwordRegex.test(password.value);
    // console.log(passwordAns);
    let isValid = true;

    if(!emailAns){
        document.querySelector("#email-error").textContent = "Email is incorrect";
        isValid = false;
    }
    if (!passwordAns){
        document.querySelector("#password-error").textContent = "Password is incorrect";
        isValid = false;
    }

    if (isValid){
        alert("Form Submitted Successfully")
        form.reset();
        
    }
})