function validate() {
    let userinput = document.getElementById("name").value
    let userPassword = document.getElementById("password").value

    if (userinput == "abc@gmail.com" && userPassword == "123") {
        alert("Login successfully")


    } else {
        alert("Login Failed")
    }
}