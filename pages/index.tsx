
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Quiz from '../components/Quiz'
import QuestionModel from '../model/Question'

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const router = useRouter()

  const [idsQuestions, setIdQuestions] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>()
  const [rightAnswers, setRightAnswers] = useState<number>(0)


  async function loadingIdsQuestions() {
    const res = await fetch(`${BASE_URL}/quiz`)
    const idsQuestions = await res.json()
    setIdQuestions(idsQuestions)
  }

  async function loadingQuestion(idQuestion: number) {
    const res = await fetch(`${BASE_URL}/question/${idQuestion}`)
    const json = await res.json()
    const newQuestion = QuestionModel.createUsingObject(json)
    setQuestion(newQuestion)
  }

  useEffect(() => {
    loadingIdsQuestions()
  }, [])

  useEffect(() => {
    loadingQuestion.length > 0 && loadingQuestion(idsQuestions[0])
  }, [idsQuestions])

  function questionResponse(questionResponse: QuestionModel) {
    setQuestion(questionResponse)
    const correct = questionResponse.hit
    setRightAnswers(rightAnswers + (correct ? 1 : 0))
  }

  function idNextQuestion() {
    if (question) {
      const nextIndex = idsQuestions.indexOf(question.id) + 1
      return idsQuestions[nextIndex]
    }

  }

  function goToNextStep() {
    const nextId = idNextQuestion()
    nextId ? goToNextQuestion(nextId) : finalize()
  }

  function goToNextQuestion(nextId: number) {
    loadingQuestion(nextId)
  }

  function finalize() {
    router.push({
      pathname: '/result',
      query:{
        total: idsQuestions.length,
        corrects: rightAnswers
      }
    })
  }

  return (
    <Quiz
      question={question}
      last={idNextQuestion() === undefined}
      questionResponse={questionResponse}
      goToNextStep={goToNextStep}
    />
  )
}
