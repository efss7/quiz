export class QuestionModel {
    #id: number
    #statement: string
    #responses: any[]
    #hit: boolean
    // #answered: boolean

    constructor(id: number, statement: string, responses: any[], hit: boolean) {
        this.#id = id
        this.#statement = statement
        this.#responses = responses
        this.#hit = hit
    }

    get id() {
        return this.#id
    }
    get statement(){
        return this.#statement
    }
    get responses (){
        return this.#responses
    }
    get hit(){
        return this.#hit
    }
    get answered(){
        return false
    }
}   