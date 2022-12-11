import QuestionModel from "../model/Question"
import styles from '../styles/Quiz.module.css'
import Button from "./Button"
import Question from './Question'

interface QuizProps {
    question: QuestionModel
    last: boolean
    questionResponse: (question: QuestionModel) => void
    goToNextStep: () => void
}

export default function Quiz(props: QuizProps) {
    function onResponse(index: number) {
        if(props.question.noAnswered){
            props.questionResponse(props.question.replyWith(index))
        }
    }
    return (
        <div className={styles.quiz}>
            {
                props.question ?
                    <Question
                        value={props.question}
                        timeToAnswer={6}
                        onResponse={onResponse}
                        timesUp={props.goToNextStep} />
                    : false
            }
            <Button
                onClick={props.goToNextStep}
                text={props.last ? 'Finalizar' : 'Próxima'} />

        </div>
    )
}