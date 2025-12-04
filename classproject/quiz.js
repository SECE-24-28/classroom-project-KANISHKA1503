const questions=[
    {
        text:"Which keyword declares a constant in JavaScript?",
        options:["var","let","const","static"],
        correctIndex:2
    },
    {
       text:"Which method is used to log to the console?",
        options:["print()","log()","console()","console.log"],
        correctIndex:3  
    },
    {
         text:"Which of these is not JavaScript data type?",
        options:["number","string","boolean","character"],
        correctIndex:3
    }
];
let currentQuestionIndex=0

const questionnumelement=document.getElementById('question-no')
const questionelement=document.getElementById('question')
const optionelement=document.getElementsByClassName('option')
const buttonelement=document.getElementById('btn')
console.log(questionelement)

questionelement.innerHTML=questions[0]["text"]
questionnumelement.innerHTML=`Question ${currentQuestionIndex+1} of 3`
questions[0].options.forEach((optn,i)=>
optionelement[i].innerHTML=optn
)


buttonelement.addEventListener('click',(e)=>
{   currentQuestionIndex=(currentQuestionIndex+1)%3
    e.preventDefault()
questionelement.innerHTML=questions[currentQuestionIndex]["text"]
questionnumelement.innerHTML=`Question ${currentQuestionIndex+1} of 3`
questions[currentQuestionIndex].options.forEach((optn,i)=>
{
    optionelement[i].innerHTML=optn
})

})
