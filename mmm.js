

function funct(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var feed = document.getElementById("feedback").value;
    phone=Number(phone);

    if( name == ''){

        alert("enter your name");
    }
    if( phone == ''){

        alert("enter your phone number");
    }
    if(phone.length <= 10){
        alert("enter a valid phone number");
    }
    
    if( feed == ''){

        alert("enter your feedback");
    }
    
    else{
        alert("than you for your feed back");
        
    }
}

let display=document.querySelector(".bars");
let body = document.querySelector(".return");
display.addEventListener('click', () =>{
    document.querySelector(".menubar").style.display="block";
})

body.addEventListener('click' , () =>{
    document.querySelector(".menubar").style.display="none";
})