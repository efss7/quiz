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

    shuffleResponses(): QuestionModel{
        let responsesShufflers = shuffle(this.#responses)
        return new QuestionModel(this.#id, this.#statement, responsesShufflers, this.#hit)
    }

    toObject() {
        return {
            id: this.#id,
            statement: this.#statement,
            responses: this.#responses.map(res => res.toObject()),
            hit: this.#hit
        }
    }
}   