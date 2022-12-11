import { shuffle } from "../functions/arrays"
import ResponseModel from "./Response"

export default class QuestionModel {
    #id: number
    #statement: string
    #responses: ResponseModel[]
    #hit: boolean

    constructor(id: number, statement: string, responses: ResponseModel[], hit: boolean) {
        this.#id = id
        this.#statement = statement
        this.#responses = responses
        this.#hit = hit
    }

    get id() {
        return this.#id
    }
    get statement() {
        return this.#statement
    }
    get responses() {
        return this.#responses
    }
    get hit() {
        return this.#hit
    }

    get answered() {
        for (let response of this.#responses) {
            if (response.revealed) return true
        }
        return false
    }

    get noAnswered(){
        return !this.answered
    }

    shuffleResponses(): QuestionModel{
        let responsesShufflers = shuffle(this.#responses)
        return new QuestionModel(this.#id, this.#statement, responsesShufflers, this.#hit)
    }

    replyWith(index:number): QuestionModel{
        const hit = this.#responses[index]?.correct
        const responses = this.#responses.map((response, i )=>{
            const responseSelected = index === i
            const mustReveal = responseSelected || response.correct
            return mustReveal ? response.reveal() : response
        })
        return new QuestionModel(this.id, this.statement, responses, hit )
    }

    static createUsingObject(obj: QuestionModel): QuestionModel {
        const responses = obj.responses.map(res => ResponseModel.createUsingObject(res))
        return new QuestionModel(
            obj.id,
            obj.statement,
            responses,
            obj.hit
        )
    }

    toObject() {
        return {
            id: this.#id,
            statement: this.#statement,
            answered: this.answered,
            hit: this.#hit,
            responses: this.#responses.map(res => res.toObject()),
        }
    }
}   