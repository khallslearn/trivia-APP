document.querySelector('#start').addEventListener('click', getFetch)

function getFetch(){
  
    const url = `https://opentdb.com/api.php?amount=1&category=31`
  
  
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          let questions =
          document.querySelector("#question").innerHTML= `${data.results[0].question}`
          document.querySelector("#one").innerText= `A: ${data.results[0].correct_answer}`
          document.querySelector("#two").innerText= `B: ${data.results[0].incorrect_answers[0]}`
          document.querySelector("#three").innerText= `C: ${data.results[0].incorrect_answers[1]}`
          document.querySelector("#four").innerText= `D: ${data.results[0].incorrect_answers[2]}`
          const answerButton = document.createElement('button')
          answerButton.innerText = 'Answer'
          answerButton.addEventListener('click', () => {
            document.querySelector("#answer").innerText= `Correct Answer: ${data.results[0].correct_answer}`
          })

          document.body.appendChild(answerButton)
  
       
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }
  