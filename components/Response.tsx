import ResponseModel from "../model/Response"
import styles from '../styles/Response.module.css'

interface ResponseProps {
    value: ResponseModel,
    index: number
    letter: string
    backgroundColorLetter: string
    onResponse: (index: number) => void
}

export default function Response(props: ResponseProps) {
    const response = props.value
    const answerRevealed = response.revealed ? styles.answerRevealed : ''
    return (
        <div className={styles.response}
            onClick={() => props.onResponse(props.index)}>
            <div className={`${answerRevealed} ${styles.contentResponse}`}>

                <div className={styles.front}>
                    <div className={styles.letter}
                        style={{ backgroundColor: props.backgroundColorLetter }}>
                        {props.letter}
                    </div>
                    <div className={styles.value} >
                        {response.value}
                    </div>
                </div>

                <div className={styles.verse}>
                    {response.correct ? (
                        <div className={styles.correct}>
                            <div>A resposta correta é...</div>
                            <div className={styles.value}>{response.value}</div>
                        </div>
                    ) : (
                        <div className={styles.incorrect}>
                            <div>A resposta informada está errada...</div>
                            <div className={styles.value}>{response.value}</div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}