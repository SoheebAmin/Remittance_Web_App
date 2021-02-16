
function checkLogin(){
    var username = document.getElementById('username_input').value;
    var password = document.getElementById('password_input').value;
    
    if (username == "tester" & password == "machinelearning") {
        window.location.href = "inflows.html";
    }
    else {
        alert("Incorrect username or password");
    }
}