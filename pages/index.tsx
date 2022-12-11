
import { useState } from 'react'
import Button from '../components/Button'
import Question from '../components/Question'
import Quiz from '../components/Quiz'
import QuestionModel from '../model/Question'
import ResponseModel from '../model/Response'

const questionMock = new QuestionModel(1, "Melhor cor?", [
  ResponseModel.incorrect("Azul"),
  ResponseModel.incorrect("Verde"),
  ResponseModel.incorrect("Vermelho"),
  ResponseModel.correct("Rosa"),
])

export default function Home() {
  const [question, setQuestion] = useState(questionMock)

  function questionResponse(question:QuestionModel){

  }

  function goToNextStep(){

  }

  return (
    <div style={{
      display: 'flex',
      flexDirection:'column',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'
    }} >
      <Quiz
      question={question}
      last={false}
      questionResponse={questionResponse}
      goToNextStep={goToNextStep}
      />
    </div>
  )
}
