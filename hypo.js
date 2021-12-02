var input = document.querySelectorAll(".side-input");
var opBtn = document.querySelector("#check-btn");
var result = document.querySelector("#output");

opBtn.addEventListener("click", calcHypo);

function calcHypo(){
    var A = Number(input[0].value);
    var B = Number(input[1].value);
    if(A<1 || B<1 ){
        return result.innerText = "Negative values or 0 are not allowed"
    }
    else{

    const sumSide = sideSum(A,B);
    var C = Math.sqrt(sumSide);
    result.innerText = "Hypotenuse of this traingle is " +C.toFixed(2);
    }
}

function sideSum(sideA, sideB){
   
    
    const sum = (sideA*sideA) + (sideB*sideB);
    return sum;
    
}