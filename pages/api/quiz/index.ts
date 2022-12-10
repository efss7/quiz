import questions from "../QuestionBank"

export default (req, res) => {
    res.status(200).json(questions.map(question => question.id))
}