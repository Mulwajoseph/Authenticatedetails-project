//object to store my user details
userDetailsDatabase ={}


function getUserDetails(){

    //username
    let userName= prompt("Enter your username")

    if(userName == null){
        return
    }
    function validateUserName(userName){
        if(userName.length < 10 && userName.length >0){ 
            return true
        }else{
            return false
        }
        
    }
    while(validateUserName(userName) == false){
        userName = prompt("Username must be less than 10 and greater than 0")
    }
    userDetailsDatabase["UserName"] = userName


    //email address

    let email =  prompt("Enter Your Email address")
    if(email == null){
        return
    }
    
    function validateEmail(email){
        const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //it checks if its an email
        emailCheckResult =emailCheck.test(email);
        if(emailCheckResult == true){
        return true
        }else {
            return false
        }
    }
    while (validateEmail(email) == false){
        email= prompt ("Enter a valid Email")
    }
    userDetailsDatabase["Email"] = email
    

    //phone number

    let phoneNumber = prompt ("Enter your phone number")
    if(phoneNumber == null){
        return
    }

    function validatePhoneNumber(phoneNumber){
        if (phoneNumber.length == 10){
            return true
        }else{
            return false
        }
    }
    while (validatePhoneNumber(phoneNumber) == false){
        phoneNumber= prompt ("Phone number must be 10 digits Enter a valid phone number")
    }
    userDetailsDatabase["Phonenumber"] = phoneNumber

    // Password

    let password = prompt("Enter your password")
    if(password == null){
        return
    }

    function validatePassword(password){
        if (password.length <6){
            return false
        }else {
            return true
        }
    }
   while (validatePassword(password) == false){
    password = prompt("Password must not be lessthat 6 digits")
   }
   userDetailsDatabase["Password"] = password

   //confirm paswsword

    let confirmPassword = prompt ("Confirm your password")
    if(confirmPassword == null){
        return
    }
    function validateConfirmPassword(confirmPassword){
        if (confirmPassword != password){
            return false 
        }else{
            return true
    }
    }
    while (validateConfirmPassword(confirmPassword) == false)
    confirmPassword = prompt("Confirmpassword does not match password try again")

    }

    function displayUserDetails(){
        alert(`Your Details\n\nUsername: ${userDetailsDatabase.UserName}\n
        Phone Number: ${ userDetailsDatabase.Phonenumber}\n
        Email: ${userDetailsDatabase.email} 
        `)

    } 
