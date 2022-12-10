import QuestionModel from "../model/Question";
import styles from '../styles/Question.module.css';
import Response from './Response';
import Statement from './Statement';

const letters = [
    { value: "A", color: "#f2c866" },
    { value: "B", color: "#f266ba" },
    { value: "C", color: "#85d4f2" },
    { value: "D", color: "#bce596" },

]
interface QuestionProps {
    value: QuestionModel
    onResponse: (index: number) => void
}

export default function Question(props: QuestionProps) {
    const question = props.value

    function renderResponse() {
        return question.responses.map((response, i) => {
            return (
                <Response
                    key={i}
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
            {renderResponse()}
        </div>
    )
}