import React, {useEffect, useState} from 'react'
import axiosRequest from "./axiosRequest";
import {urls} from "./requests";
import Card from "./Card";
import "./Row.css";

function Row({requestUrl,titleRow}) {
    const [masVistas, setMasVistas] = useState([]);

    useEffect(() => {
        async function fetchData() {
            function formatDate(date) {
                const months= ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
                let dateDay = date.getDate();
                let formatDate = `${(dateDay<10) ? '0'+dateDay : dateDay} ${months[date.getMonth()]} ${date.getFullYear()}`;
                return formatDate;
            }
            const requestData = await axiosRequest.get(requestUrl);
            const masVistosDia = requestData.data.results.slice(0, 6).map(element => {
                const poster=urls.imagesUrl+element.poster_path;
                const title=(requestUrl.includes('tv')) ? element.name : element.title;
                const date= formatDate(new Date((requestUrl.includes('tv')) ? element.first_air_date : element.release_date));
                return <Card poster={poster}
                            title={title}
                            date={date}
                            key={title}
                        />
            });
            setMasVistas(masVistosDia);
        }
        fetchData();
        // [] se ejecutara cada vez que cambie los elementos del array
    }, [requestUrl]);

    return (
        <div className="row row-glass-bg">
            <h3 className="row-title">{titleRow}</h3>
            <div className="cards-container">
                {masVistas}
            </div>
        </div>
    )
}

export default Row
