

function search(){


    let a = document.getElementById('anchor').value.toLowerCase();

    switch(a){

        case "about":
           window.location.href = "about.html";
            break;
        case "batting":
            window.location.href = "bat.html";
            break;
        case "bowling":
            window.location.href = "bowl.html";
            break;
        case "fielding":
            window.location.href = "field.html";
            break;
        default:
            alert("page not founded");

    }
}


    let isOn = false;

        function change() {
            if (isOn) {
                document.body.style.backgroundColor = "white"; 
                document.body.style.color = "black"; 
                document.getElementById("change").innerText = "On";
                document.getElementById("footer").style.backgroundColor = "blue";

            } else {
                document.body.style.backgroundColor = "rgb(25, 24, 24)"; 
                document.body.style.color = "white"; 
                document.getElementById("change").innerText = "Off";
                document.getElementById("footer").style.backgroundColor = "rgb(25, 24, 24)";

            }
            isOn = !isOn;
        }


function move(){
    let image = document.getElementById('image');
    let images = ['image/p1','image/p2','image/p3','image/p4','image/p5','image/p6',];

    let random = Math.floor(Math.random() * 6);
    image.src =images[random];
}

