import template from "./card.template";

export default class CardComponent{
    constructor(input){
        this.input = input
        this._el = document.createElement('card')
        this.render()
    }
render() {
    this._el.innerHTML = template(this.input)
}
get element(){
    return this._el
}
}

