
function check(){
    var username = document.getElementById("name").value;
    var password = document.getElementById("pass").value;
    var errorname = document.getElementById("errorname").value;
    var errorpass = document.getElementById("errorpass").value;

    if(username == "deepan"  &&  password == "1234")
        {
        // alert("sign in success fully")
        document.getElementById("name").style.border="2px solid green";
        document.getElementById("pass").style.border="2px solid green";
        window.location.assign("home.html")
    }
    else{
        // alert("enter a valid username and password")
        document.getElementById("name").style.border="2px solid red";
        document.getElementById("pass").style.border="2px solid red";
        document.getElementById("errorname").innerHTML="enter a valid username";
        document.getElementById("errorpass").innerHTML="enter a valid password";
    }

}
