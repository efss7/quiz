import QuestionModel from "../model/Question";
import styles from '../styles/Question.module.css';
import Response from './Response';
import Statement from './Statement';
import Timer from "./Timer";

const letters = [
    { value: "A", color: "#f2c866" },
    { value: "B", color: "#f266ba" },
    { value: "C", color: "#85d4f2" },
    { value: "D", color: "#bce596" },

]
interface QuestionProps {
    value: QuestionModel
    timeToAnswer?: number
    timesUp: () => void
    onResponse: (index: number) => void
}

export default function Question(props: QuestionProps) {
    const question = props.value

    function renderResponse() {
        return question.responses.map((response, i) => {
            return (
                <Response
                    key={`${question.id}-${i}`}
                    value={response}
                    index={i}
                    letter={letters[i].value}
                    backgroundColorLetter={letters[i].color}
                    onResponse={props.onResponse}
                />
            )
        })
    }

    return (
        <div className={styles.question} >
            <Statement text={question.statement} />
            <Timer
                key={question.id}
                duration={props.timeToAnswer ?? 10}
                timesUp={props.timesUp}
            />
            {renderResponse()}
        </div>
    )
}