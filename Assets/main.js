console.log('Conectado');
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    'api_key': API_KEY,
  },
});

async function getTrendingMoviesPreview(){
  const { data } = await api('trending/movie/day');
  const movies = data.results;

  movies.forEach(movie => {
    const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')
    
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');

    const movieImg = document.createElement('img');
    movieImg.classList.add('movie-img');
    movieImg.setAttribute('alt', movie.title);
    movieImg.setAttribute(
      'src',
      'https://image.tmdb.org/t/p/w300' + movie.poster_path,
    );

    movieContainer.appendChild(movieImg);
    trendingPreviewMoviesContainer.appendChild(movieContainer);
  });
}
getTrendingMoviesPreview()


async function getCategoriesPreview(){
  const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key='+API_KEY);
  const data = await res.json();
  const categories = data.genres;
  categories.forEach(movie => {
  const catPreviewMoviesContainer = document.querySelector('#trendingPreview1 .catApp')
  
  const catContainer = document.createElement('p');
  catContainer.classList.add('catPeli');
  catContainer.setAttribute('id',movie.name);
  const categoryTitleText = document.createTextNode(movie.name);

  catPreviewMoviesContainer.appendChild(catContainer);
  catContainer.appendChild(categoryTitleText);
});
}


getCategoriesPreview()