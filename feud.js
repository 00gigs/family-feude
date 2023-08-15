

const quesionsArea = $('#boardQuestions')
const answerList = $('#answerList')
const startbtn = $('#start')
const buzzer = $('#submitBtn')
const userAnswer = $('#userAnswer')
const baseURL = 'https://opentdb.com/'
const url = 'api.php'

//starts then disables start button
startbtn.on('click', disableButton);

function disableButton() {
    document.querySelector('#start').disabled = true;
}

startbtn.on('click',btnStart)
async function btnStart(){
    getToken()
    startGame()
}
// get game session token to use from https://opentdb.com/api_config.php and
// pass it through a fucntion that starts the game using that session token 

async function getToken(startGame){
    const authUrl = 'https://opentdb.com/api_token.php?command=request'
    try {
       const res =  await axios.get(authUrl)
        const token = res.data.token
    } catch (error) {
        console.log(error)
    }
    
}
 

async function startGame(token){
    const res = await axios(
        {url: url,
        method: 'GET',
        baseURL:baseURL,
        params:{
            amount:10,
            type:'multiple',
            token:token
        }
    }
    )
  
   
       
      
    

    function maingame() {
    
//array for questions & answers
    const QuestionsArray0 = [res.data.results[0].question,res.data.results[0].correct_answer,res.data.results[0].incorrect_answer]
    const QuestionsArray1 = [res.data.results[1].question,res.data.results[1].correct_answer,res.data.results[1].incorrect_answer]
    const QuestionsArray2 = [res.data.results[2].question,res.data.results[2].correct_answer,res.data.results[2].incorrect_answer]
    const QuestionsArray3 = [res.data.results[3].question,res.data.results[3].correct_answer,res.data.results[3].incorrect_answer]
    const QuestionsArray4 = [res.data.results[4].question,res.data.results[4].correct_answer,res.data.results[4].incorrect_answer]
    const QuestionsArray5 = [res.data.results[5].question,res.data.results[5].correct_answer,res.data.results[5].incorrect_answer]
    const QuestionsArray6 = [res.data.results[6].question,res.data.results[6].correct_answer,res.data.results[6].incorrect_answer]
    const QuestionsArray7 = [res.data.results[7].question,res.data.results[7].correct_answer,res.data.results[7].incorrect_answer]
    const QuestionsArray8 = [res.data.results[8].question,res.data.results[8].correct_answer,res.data.results[8].incorrect_answer]
    const QuestionsArray9 = [res.data.results[9].question,res.data.results[9].correct_answer,res.data.results[9].incorrect_answer]
//array for questions
    const BigArrayDataQuestions = [
        QuestionsArray0[0],QuestionsArray1[0],QuestionsArray2[0],QuestionsArray3[0],QuestionsArray4[0],
        QuestionsArray5[0],QuestionsArray6[0],QuestionsArray7[0],QuestionsArray8[0],QuestionsArray9[0]
        ]
////array for answers
    const BigArrayDataAnswers = [
        QuestionsArray0[1],QuestionsArray1[1],QuestionsArray2[1],QuestionsArray3[1],QuestionsArray4[1],
        QuestionsArray5[1],QuestionsArray6[1],QuestionsArray7[1],QuestionsArray8[1],QuestionsArray9[1]
        ]
   
        let currentquestion = 0
        let score = 0
//display question
 function displayQuestion(question) {

    const Q = BigArrayDataQuestions[currentquestion]
    document.getElementById('boardQuestions').innerHTML = Q
 }


       
//buzzer click checks if correct answer is true or not
      buzzer.on('click', () =>{
        let currentCorrectAnswer = 0
        const A = BigArrayDataAnswers[currentCorrectAnswer]
        let input = userAnswer.val()
        if(input === A){
            movetoNextQuestion()
            currentCorrectAnswer++
            score++
            console.log(score,currentCorrectAnswer,currentquestion)
        }else{
            //learn how to append text once then disapear after buzzer is clicked 👉 to solve problem use innertextHTML instead of append it will show in same spot evertyime
            document.getElementById('answerList').innerHTML = 'incorrrect'
            score--           
        }


        function movetoNextQuestion(){
            currentquestion++
            if(currentquestion < BigArrayDataQuestions.length){
                displayQuestion(BigArrayDataQuestions[currentquestion])
            }else{
                null
            }
            }
      })

      displayQuestion(BigArrayDataQuestions[currentquestion])



}
maingame()
}
