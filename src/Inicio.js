import requests from "./requests";
import Row from "./Row";
import "./Inicio.css";
function Inicio() {
    return (
        <>
            <Row titleRow={requests.fetchSeriesPopulares.title} 
                requestUrl={requests.fetchSeriesPopulares.url}    
            />
            <Row titleRow={requests.fetchSeriesMasVistasSemana.title} 
                requestUrl={requests.fetchSeriesMasVistasSemana.url}    
            />
            <Row titleRow={requests.fetchPeliculasPopulares.title} 
                requestUrl={requests.fetchPeliculasPopulares.url}    
            />
            <Row titleRow={requests.fetchPeliculasMasVistasSemana.title} 
                requestUrl={requests.fetchPeliculasMasVistasSemana.url}    
            />
        </>
    )
}

export default Inicio
