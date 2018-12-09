import http from 'axios'
class SerieService {
  constructor() {
    this.url = "http://api.tvmaze.com/search/shows";
  }
  search(keyword){
    return http.get(this.url + '?q=' + keyword)

  }
}


export default new SerieService();
