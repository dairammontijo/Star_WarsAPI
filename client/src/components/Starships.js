import React, {useState, useEffect} from "react";
import axios from "axios";

const Starships = (props) => {
    const { id } = props
    const [apiData, setApiData] = useState({})

    useEffect(() => {
        axios
        .get(`https://swapi.dev/api/starships/${id}`)
        .then((response) => {
            console.log(response.data)
            setApiData(response.data)
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <h1>{apiData.name}</h1>
        </div>
    )
}

export default Starships;