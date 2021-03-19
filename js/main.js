function contActive(){
    var selector = document.getElementById("cont-colors");
    var selector2 = document.getElementById("btn-elemento");
    selector.classList.toggle("active");
    selector2.classList.toggle("active");
}

function bgRed(){
    var selector = document.getElementById("body");
    selector.className = '';
    selector.classList.toggle("red");
}
function bgBlack(){
    var selector = document.getElementById("body");
    selector.className = '';
    selector.classList.toggle("black");
}
function bgBlue(){
    var selector = document.getElementById("body");
    selector.className = '';
    selector.classList.toggle("blue");
}

function bgOrange (){
    var selector = document.getElementById("body");
    selector.className = '';
    selector.classList.toggle("...");
}



AOS.init();