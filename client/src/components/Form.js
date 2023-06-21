import { navigate } from "@reach/router"
import { useState } from "react"

const Form = () => {
    const [category, setCategory] = useState("")
    const [id, setId] = useState("")

    const handleSubmit = (e) => {
       //e.preventDefault();
        navigate(`/${category}/${id}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            Search for:
            <select onChange={e => setCategory(e.target.value)}>
                <option value="">---</option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="starships">Starships</option>
            </select>
            ID: <input type="text" onChange={e => setId(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default Form 