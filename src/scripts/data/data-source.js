class DataSource {
    static searchMovie(keyword) {
      const baseUrl = 'https://api.themoviedb.org/3/search/movie?api_key='
      const apiKey = '59cdd6504416cecce6a8889c28fb193b'
      return fetch(`${baseUrl}${apiKey}&query=${keyword}`)
      .then(response=>{
        return response.json();
      })
      .then(responseJson=>{
        if(responseJson.results.length > 0){
          return Promise.resolve(responseJson.results);
        } else if(responseJson.results.length === 0){
          return Promise.reject(`The search field cannot be empty`);
        } else {
          return Promise.reject(`This movie is not available in our database`);
        }
      });
    }
  }
  
  export default DataSource;  