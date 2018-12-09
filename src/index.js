import CardComponent from "./card/card.component";
import SearchComponent from "./search/search.component";

function pageIndex() {
  const searchWrapper = document.getElementById("search");
  const seriesWrapper = document.getElementById("series");

  const searchComponent = new SearchComponent()
  searchComponent.output = function(series){
    //créer les cartes ici
    for(let serie of series){
      const cardComponent = new CardComponent(serie.show)
      seriesWrapper.appendChild(cardComponent.element)
    }
  }
  searchWrapper.appendChild(searchComponent.element)
}

document.addEventListener("DOMContentLoaded", pageIndex);
