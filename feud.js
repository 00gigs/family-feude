

const quesionsArea = $('#boardQuestions')
const answerList = $('#answerList')
const startbtn = $('#start')
const questionDisplay = $('#boardQuestions')
const baseURL = 'https://opentdb.com/'
const url = 'api.php'




// get game session token to use from https://opentdb.com/api_config.php and
// pass it through a fucntion that starts the game using that session token 


startbtn.on('click',btnStart)

async function btnStart(){
    getToken()
    startGame()
}


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



    
    //data
    // question0
   const question0 = res.data.results[0].question
   const answer0 = res.data.results[0].correct_answer
   const incorrect0 = res.data.results[0].incorrect_answers
    // question0
    const question1 = res.data.results[1].question
    const answer1 = res.data.results[1].correct_answer
    const incorrect1 = res.data.results[1].incorrect_answers
     // question0
   const question2 = res.data.results[2].question
   const answer2 = res.data.results[2].correct_answer
   const incorrect2 = res.data.results[2].incorrect_answers
   
     // question0
   const question3 = res.data.results[3].question
   const answer3 = res.data.results[3].correct_answer
   const incorrect3 = res.data.results[3].incorrect_answers
   
     // question0
   const question4 = res.data.results[4].question
   const answer4 = res.data.results[4].correct_answer
   const incorrect4 = res.data.results[4].incorrect_answers
   
     // question0
   const question5 = res.data.results[5].question
   const answer5 = res.data.results[5].correct_answer
   const incorrect5 = res.data.results[5].incorrect_answers
   
     // question0
   const question6 = res.data.results[6].question
   const answer6 = res.data.results[6].correct_answer
   const incorrect6 = res.data.results[6].incorrect_answers
   
     // question0
   const question7 = res.data.results[7].question
   const answer7 = res.data.results[7].correct_answer
   const incorrect7 = res.data.results[7].incorrect_answers
   
     // question0
   const question8 = res.data.results[8].question
   const answer8 = res.data.results[8].correct_answer
   const incorrect8 = res.data.results[8].incorrect_answers
   
     // question0
   const question9 = res.data.results[9].question
   const answer9 = res.data.results[9].correct_answer
   const incorrect9 = res.data.results[9].incorrect_answers  
}


//question
//correct_answers
//incorrect_answers[0][1][2](each array item = incorrect question use these to show low survey responses )
