import React, {useState, useEffect} from "react";
import axios from "axios";

const Starships = (props) => {
    const { id } = props
    const [apiData, setApiData] = useState({})

    useEffect(() => {
        axios
        .get(`https://swapi.dev/api/starships/${id}/`)
        .then((response) => {
            console.log(response.data)
            setApiData(response.data)
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <div class="form-control bg-secondary text-center">
            <h1>{apiData.name}</h1>
            <p>Model: {apiData.model}</p>
            <p>Manufacturer: {apiData.manufacturer}</p>
            <p>Cost: {apiData.cost_in_credits}</p>
            <p>Max Atmosphering Speed: {apiData.max_atmosphering_speed}</p>
            <p>Crew: {apiData.crew}</p>
            <p>Passangers: {apiData.passangers}</p>
            <p>Cargo Capacity: {apiData.cargo_capacity}</p>
            <p>Consumables: {apiData.consumables}</p>
            <p>Hyper Drive Rating: {apiData.hyperdrive_rating}</p>
        </div>
    )
}

export default Starships;