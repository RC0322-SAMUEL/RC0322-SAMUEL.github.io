/*Scripts used for the qiuz, inspired by Trivia*/
document.addEventListener("DOMContentLoaded", function(){
var myQuestions = [
    {
        question: "Which country has the largest population ?",
        answers: {
            a: 'China',
            b: 'India',
            c: 'United States'
        },
        correctAnswer: 'b'
    },
    {
        question: "Which country has the largest population ?",
        answers: {
            a: 'China',
            b: 'India',
            c: 'United States'
        },
        correctAnswer: 'b'
    },
    {
        question: "Which country has the largest population ?",
        answers: {
            a: 'China',
            b: 'India',
            c: 'United States'
        },
        correctAnswer: 'b'
    },
    {
        question: "Which country has the largest population ?",
        answers: {
            a: 'China',
            b: 'India',
            c: 'United States'
        },
        correctAnswer: 'b'
    }
]

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");


function generateQuiz(questions, quizContainer, resultContainer, submitButton){
    function showQuestions(questions, quizContainer){
        
        let output = [];
        let answers;

        for (let i = 0; i < questions.length(); i++){
            
            answers = [];

            for (choice in questions[i].answers){

                answers.push(

                    '<label>'
                    + '<input type = "radio" name = "question' + i + '" value = "' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }

            output.push(
                '<div class = "question">' + questions[i].question + '</div>'
                + '<div class = "answers">' + answers.join('') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');
    }

    function showResult(questions, quizContainer, resultContainer){

    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function(){
        showResult(questions, quizContainer, resultContainer);
    }
}



});
