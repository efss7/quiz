
import { useState } from 'react'
import Button from '../components/Button'
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
    if (question.noAnswered) {
      setQuestion(question.replyWith(-1))
    }

  }
  return (
    <div style={{
      display: 'flex',
      flexDirection:'column',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'
    }} >
      <Question
        value={question}
        timeToAnswer={5}
        onResponse={onResponse}
        timesUp={timesUp} />
        <Button text={"Próxima"} href={"/result"} />
    </div>
  )
}
