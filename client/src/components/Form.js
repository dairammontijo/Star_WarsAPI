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
        <div>
            <form onSubmit={handleSubmit} class="form-control bg-secondary text-center">
                Search for:
                <select onChange={e => setCategory(e.target.value)} class="form-select">
                    <option value="">---</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                </select>
                ID: <input class="input-group-text" type="text" onChange={e => setId(e.target.value)} />
                <button type="submit" class="btn btn-warning">Search</button>
            </form>
        </div>
    )
}

export default Form 