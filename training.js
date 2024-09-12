let openshopping = document.querySelector('#training');
let closeshopping = document.querySelector('#closeshopping');
let list = document.querySelector('.list');
let listcard = document.querySelector('.listcard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


openshopping.addEventListener('click', ()=>{
    document.querySelector(".card").style.display = "block";
    
})
closeshopping.addEventListener('click', ()=>{
   document.querySelector(".card").style.display = "none";
})
list.addEventListener('click', ()=>{
    document.querySelector(".card").style.display = "none";
 })
 

var plus = document.querySelector(".plus1");

plus.addEventListener(('click'), ()=>{
    let no1 = document.querySelector(".c1").innerHTML;
    no1++;
    document.querySelector(".c1").innerHTML = no1;
    let amount = 400;
    var amt11=amount * no1;
    document.querySelector(".amount1").innerHTML = "$"+amt11;

})

var minus = document.querySelector(".minus1");

minus.addEventListener(('click'), ()=>{
    let po1 = document.querySelector(".c1").innerHTML;
    po1--;
    if( po1 <= 0){
        document.querySelector(".c1").innerHTML = 0;
    }
    else{
        document.querySelector(".c1").innerHTML = po1;
    }
    let amount = 400;
    if(po1 <= 0){
        document.querySelector(".amount1").innerHTML = "$0";
    }
    else{
        var amt12=amount *po1;
        document.querySelector(".amount1").innerHTML = "$"+amt12;
    }
   

})

var plus2 = document.querySelector(".plus2");

plus2.addEventListener(('click'), ()=>{
    let no1 = document.querySelector(".c2").innerHTML;
    no1++;
    document.querySelector(".c2").innerHTML = no1;
    let amount = 500;
    var amt21=amount *no1;
    document.querySelector(".amount2").innerHTML = "$"+amt21;

})

var minus2 = document.querySelector(".minus2");

minus2.addEventListener(('click'), ()=>{
    let po1 = document.querySelector(".c2").innerHTML;
    po1--;
    if( po1 <= 0){
        document.querySelector(".c2").innerHTML = 0;
    }
    else{
        document.querySelector(".c2").innerHTML = po1;
    }
    let amount = 500;
    if(po1 <= 0){
        document.querySelector(".amount2").innerHTML = "$0";
    }
    else{
        var amt22=amount *po1;
        document.querySelector(".amount2").innerHTML = "$"+amt22;
    }
   

})

var plus3 = document.querySelector(".plus3");

plus3.addEventListener(('click'), ()=>{
    let no1 = document.querySelector(".c3").innerHTML;
    no1++;
    document.querySelector(".c3").innerHTML = no1;
    let amount = 400;
    var amt31=amount *no1;
    document.querySelector(".amount3").innerHTML = "$"+amt31;

})

var minus3 = document.querySelector(".minus3");

minus3.addEventListener(('click'), ()=>{
    let po1 = document.querySelector(".c3").innerHTML;
    po1--;
    if( po1 <= 0){
        document.querySelector(".c3").innerHTML = 0;
    }
    else{
        document.querySelector(".c3").innerHTML = po1;
    }
    let amount = 400;
    if(po1 <= 0){
        document.querySelector(".amount3").innerHTML = "$0";
    }
    else{
        amt32=amount *po1;
        document.querySelector(".amount3").innerHTML = "$"+amt32;
    }
   

})

var plus4 = document.querySelector(".plus4");

plus4.addEventListener(('click'), ()=>{
    let no1 = document.querySelector(".c4").innerHTML;
    no1++;
    document.querySelector(".c4").innerHTML = no1;
    let amount = 400;
    var amt41=amount * no1;
    document.querySelector(".amount4").innerHTML = "$"+amt41;

})

var minus4 = document.querySelector(".minus4");

minus4.addEventListener(('click'), ()=>{
    let po1 = document.querySelector(".c4").innerHTML;
    po1--;
    if( po1 <= 0){
        document.querySelector(".c4").innerHTML = 0;
    }
    else{
        document.querySelector(".c4").innerHTML = po1;
    }
    let amount = 400;
    if(po1 <= 0){
        document.querySelector(".amount4").innerHTML = "$0";
    }
    else{
        var amt42=amount * po1;
        document.querySelector(".amount4").innerHTML = "$"+amt42;
    }
   

})

var plus5 = document.querySelector(".plus5");

plus5.addEventListener(('click'), ()=>{
    let no1 = document.querySelector(".c5").innerHTML;
    no1++;
    document.querySelector(".c5").innerHTML = no1;
    let amount = 400;
    var amt51=amount * no1;
    document.querySelector(".amount5").innerHTML = "$"+amt51;

})

var minus5 = document.querySelector(".minus5");

minus5.addEventListener(('click'), ()=>{
    let po1 = document.querySelector(".c5").innerHTML;
    po1--;
    if( po1 <= 0){
        document.querySelector(".c5").innerHTML = 0;
    }
    else{
        document.querySelector(".c5").innerHTML = po1;
    }
    let amount = 400;
    if(po1 <= 0){
        document.querySelector(".amount5").innerHTML = "$0";
    }
    else{
        var amt52 =amount * po1;
        document.querySelector(".amount5").innerHTML = "$"+amt52;
    }
   

})

var plus6 = document.querySelector(".plus6");

plus6.addEventListener(('click'), ()=>{
    let no1 = document.querySelector(".c6").innerHTML;
    no1++;
    document.querySelector(".c6").innerHTML = no1;
    let amount = 800;
    var amt61=amount * no1;
    document.querySelector(".amount6").innerHTML = "$"+amount * no1;

})

var minus6 = document.querySelector(".minus6");

minus6.addEventListener(('click'), ()=>{
    let po1 = document.querySelector(".c6").innerHTML;
    po1--;
    if( po1 <= 0){
        document.querySelector(".c6").innerHTML = 0;
    }
    else{
        document.querySelector(".c6").innerHTML = po1;
    }
    let amount = 800;
    if(po1 <= 0){
        document.querySelector(".amount6").innerHTML = "$0";
    }
    else{
        var amt62=amount * po1;
        document.querySelector(".amount6").innerHTML = "$"+amount *po1;
    }
   

})

var plus7 = document.querySelector(".plus7");

plus7.addEventListener(('click'), ()=>{
    let no1 = document.querySelector(".c7").innerHTML;
    no1++;
    document.querySelector(".c7").innerHTML = no1;
    let amount = 700;
    var amt71=amount * no1;
    document.querySelector(".amount7").innerHTML = "$"+amt71;

})

var minus7 = document.querySelector(".minus7");

minus7.addEventListener(('click'), ()=>{
    let po1 = document.querySelector(".c7").innerHTML;
    po1--;
    if( po1 <= 0){
        document.querySelector(".c7").innerHTML = 0;
    }
    else{
        document.querySelector(".c7").innerHTML = po1;
    }
    let amount = 700;
    if(po1 <= 0){
        document.querySelector(".amount7").innerHTML = "$0";
    }
    else{
        var amt72=amount * po1;
        document.querySelector(".amount7").innerHTML = "$"+amt72;
    }
})

