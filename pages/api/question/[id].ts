import type { NextApiRequest, NextApiResponse } from 'next'
import questions from '../QuestionBank'


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const idSelected = +req.query.id
    const onlyQuestionOrNothing = questions.filter(question => question.id === idSelected)
    if(onlyQuestionOrNothing.length === 1){
        const questionSelected = onlyQuestionOrNothing[0].shuffleResponses()
        res.status(200).json(questionSelected.toObject())
    }else{
        res.status(204).send("Sem conteúdo")
    }
    res.status(200).json(questions[0].toObject())
}
