var qForm = document.querySelector(".quiz-form");
var opBtn = document.querySelector("#check-btn");
var result = document.querySelector("#output");

const answers = ["90", "right angled", "equilateral", "acute", "isosceles"];
opBtn.addEventListener("click", quizResult);

function quizResult(){
    var score = 0;
    var i=0;
    const formResults = new FormData(qForm);
    for(let value of formResults.values()){
        if (value===answers[i]){
                score=score+1;
        }
        i=i+1;
    }
    result.innerText = "Your SCORE in the quiz is : "+score;
}