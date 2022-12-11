import styles from '../styles/Result.module.css'
import { useRouter } from "next/router"

export default function Result(){
    const router = useRouter()
    const total = +`${router.query.total}`
    const corrects = +`${router.query.corrects}`
    const percentage = Math.round((corrects / total) * 100)
    return (
        <div className={styles.result}>
            <h1>Resultado Final</h1>
            <div>{total}</div>
            <div>{corrects}</div>
            <div>{`${percentage}%`}</div>
        </div>
    )
}