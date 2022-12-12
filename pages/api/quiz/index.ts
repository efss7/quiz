import type { NextApiRequest, NextApiResponse } from 'next'
import { shuffle } from "../../../functions/arrays"
import questions from "../QuestionBank"

export default function quiz(req:NextApiRequest, res:NextApiResponse){
    const ids = questions.map(question => question.id)
    res.status(200).json(shuffle(ids))
}