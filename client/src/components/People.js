import React, { useState, useEffect } from "react";
import axios from "axios"

const People = (props) => {
    const { id } = props
    const [apiData, setApiData] = useState({})
    
    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/people/${id}`)
            .then((response) => {
                console.log(response.data)
                setApiData(response.data)
            })
            .catch((err) => console.log(err))
    }, [])
    
    return (
        <div>
            <h1>{apiData.name}</h1>
            <p>Height:{apiData.height}</p>
            <p>Hair Color:{apiData.hair_color}</p>
            <p>Eye Color: {apiData.eye_color}</p>
            <p>Skin Color: {apiData.skin_color}</p>
        </div>
    )
}

export default People;