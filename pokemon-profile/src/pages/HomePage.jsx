import { use, useState } from "react"
import { useNavigate } from "react-router-dom"

function HomePage() {
    const [pokemon , setPokemon] = useState("") 
    const navigate = useNavigate() 
    const HandleChange = (e) => {
        console.log(e.target.value)
        setPokemon (e.target.value)
    }

    const handleSearch = () => {
        navigate(`/pokemon/${pokemon}`)
        console.log('button clicked')
    }
    return (
        <>
        <input placeholder="Enter Pokemon name..." 
        type= "text" 
        value={pokemon} 
        onChange={HandleChange}
        ></input>

        <button onClick={handleSearch}>Search</button>
        </>
    )
}

export default HomePage