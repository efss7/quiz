
import { useState } from 'react'
import Question from '../components/Question'
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

  function onResponse(index: number) {
    setQuestion(question.replyWith(index))
  }
  function timesUp() {
    if (question.answered) {
      setQuestion(question.replyWith(-1))
    }

  }
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'
    }} >
      <Question
        value={question}
        onResponse={onResponse}
        timesUp={timesUp} />
    </div>
  )
}
