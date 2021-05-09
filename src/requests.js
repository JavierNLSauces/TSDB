const API_KEY = "81ecfb9173e25aeb71ac550f8513b4e2";

const requests = {
    fetchSeriesPopulares:{
        title: 'Series populares',
        url:`/tv/popular?api_key=${API_KEY}&language=es-ES}`
    } ,
    fetchSeriesMasVistasSemana:{
        title: 'Series más vistas de la semana',
        url:`/trending/tv/day?api_key=${API_KEY}`
    },
    fetchPeliculasPopulares:{
        title: 'Películas populares',
        url:`/movie/popular?api_key=${API_KEY}&language=es-ES`
    } ,
    fetchPeliculasMasVistasSemana:{
        title: 'Películas más vistas de la semana',
        url:`/trending/movie/day?api_key=${API_KEY}`
    },
}

export const urls ={
    baseUrl: "https://api.themoviedb.org/3",
    imagesUrl: "https://image.tmdb.org/t/p/original"
}

export default requests;
