import React, { useState, useEffect } from "react";
import axios from "axios"

const Planets = (props) => {
    const { id } = props
    const [apiData, setApiData] = useState({})

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/planets/${id}`)
            .then((response) => {
                console.log(response.data)
                setApiData(response.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div class="form-control bg-secondary text-center">
            <h1>{apiData.name}</h1>
            <p>Rotation Period: {apiData.rotation_period}</p>
            <p>Orbital Period: {apiData.orbital_period}</p>
            <p>Diameter: {apiData.diameter}</p>
            <p>Climate: {apiData.climate}</p>
            <p>Gravity: {apiData.gravity}</p>
            <p>Terrain: {apiData.terrain}</p>
            <p>Surface Water: {apiData.surface_water}</p>
            <p>Population: {apiData.population}</p>
        </div>
    )
}

export default Planets;