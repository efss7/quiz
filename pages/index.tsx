
import Question from '../components/Question'
import QuestionModel from '../model/Question'
import ResponseModel from '../model/Response'


export default function Home() {
  const questionTest = new QuestionModel(1, "Melhor cor?", [
    ResponseModel.incorrect("Azul"),
    ResponseModel.incorrect("Verde"),
    ResponseModel.incorrect("Vermelho"),
    ResponseModel.correct("Rosa"),
  ], false)
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'
    }} >
      <Question value={questionTest} />
    </div>
  )
}
