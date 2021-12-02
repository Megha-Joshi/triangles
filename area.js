var input = document.querySelectorAll(".side-input");
var opBtn = document.querySelector("#check-btn");
var result = document.querySelector("#output");

opBtn.addEventListener("click", calcArea);

function calcArea(){
    var breadth = Number(input[0].value);
    var height = Number(input[1].value);
    if(height<1 || breadth<1){
        result.innerText = "Please enter positive values or more than 0 only"
    }
    else{
    console.log(breadth, height);
    const productSide = sideProduct(breadth,height);
    var Area = productSide/2;
    result.innerText = "The area of the above triangle is " + Area;
}
}

function sideProduct(breadth, height){
    const product = (breadth*height);
    console.log(product);
    return product;
}