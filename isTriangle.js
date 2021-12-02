var input = document.querySelectorAll(".angle-input");
var opBtn = document.querySelector("#check-btn");
var result = document.querySelector("#output");

opBtn.addEventListener("click", triangleResult);

function triangleResult(){
    // const sum =angleSum(Number(input[0].value)+Number(input[1].value)+Number(input[2].value));
    var inp1 = Number(input[0].value);
    var inp2 = Number(input[1].value);
    var inp3 = Number(input[2].value);
    if(inp1<1 || inp2<1 || inp3<1){
        result.innerText = "Please enter positive numbers only"
    }
    else{
    
    var sumAngle = angleSum(inp1, inp2, inp3);
    
    if (sumAngle === 180){
        result.innerText = "Yes, these angles together make a triangle. Awesome!!!";
    }
    else{
        result.innerText = "No, these angles doesn't make a triangle."
    }

}

}

function angleSum(angle1, angle2, angle3){
    const sum = angle1 + angle2 + angle3;

    return sum;
}