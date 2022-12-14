export default class ResponseModel {
    #value: string
    #correct: boolean
    #revealed: boolean

    constructor(value: string, correct: boolean, revealed: boolean) {
        this.#value = value
        this.#correct = correct
        this.#revealed = revealed
    }

    static correct(value:string){
        return new ResponseModel(value, true, false)

    }
    static incorrect(value:string){
        return new ResponseModel(value, false, false)
    }

    get value() {
        return this.#value
    }
    get correct() {
        return this.#correct
    }
    get revealed() {
        return this.#revealed
    }

    reveal(){
        return new ResponseModel(this.#value, this.#correct, true)
    }

    static createUsingObject(obj: ResponseModel):ResponseModel{
        return new ResponseModel(
            obj.value,
            obj.correct,
            obj.revealed
        )
    }

    toObject(){
        return{
            value: this.#value,
            correct: this.#correct,
            revealed: this.#revealed
        }
    }
}