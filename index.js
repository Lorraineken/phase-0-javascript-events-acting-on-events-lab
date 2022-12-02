// Your code here
//const dodger = document.getElementById("dodger");
//dodger.style.background = "#FF69B4";
//dodger.style.bottom = "0px";
//dodger.style.left = "0px";


const dodger = document.getElementById("dodger");

function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px","")
    const left = parseInt(leftNumbers,10);

    if (left>0){
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px","")
    const left = parseInt(leftNumbers,10);

    if (left>0 && left<=359){
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown",function (e){
    if (e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
    else if(e.key === "ArrowRight"){
        moveDodgerRight()
    }
})