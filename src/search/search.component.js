import template from "./search.template";
import serieService from "../core/serie.service"

export default class SearchComponent{
    constructor(){
        this._el = document.createElement('search')
        this.render()
    }
    render(){
        this._el.innerHTML = template()
        this.form = this._el.querySelector('#searchForm')
        this.form.addEventListener('submit', (event) =>{
            this.submitSearch()
            event.preventDefault()
        })
     }
     submitSearch(){
         const inputEl = this._el.querySelector('#searchInput')
         serieService
         .search(inputEl.value)
         .then((res) => {
             const series = res.data
             this.output(series)
             //console.log(this.output)
         })
       
     }
    get element(){
        return this._el

    }
}