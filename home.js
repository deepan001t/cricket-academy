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
    let images = ['image/new1.jpg','image/new2.jpg','image/new3.jpg','image/new4.jpg','image/new5.jpg','image/new6.jpg',];
    let random = Math.floor(Math.random() * 6);
    image.src =images[random];

}

let display=document.querySelector(".bars");
let body = document.querySelector(".return");
display.addEventListener('click', () =>{
    document.querySelector(".menubar").style.display="block";
})

body.addEventListener('click' , () =>{
    document.querySelector(".menubar").style.display="none";
})

