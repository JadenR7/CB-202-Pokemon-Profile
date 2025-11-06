import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PokemonPage () {
    const {name} = useParams()

    const [isLoading, setIsLoading] = useState(true);
    const [imageURL, setImageURL] = useState("");
    const [stats, setStats] = useState([]);
    const [type, setType] = useState("");

    useEffect(() => {
        async function getData() {
            const url = "https://pokemon-api3.p.rapidapi.com/pokemon?name=" + name;

            const options = {
            method: "GET",
            headers: {
                "x-rapidapi-key": "0032170e3emshfad7e5a4566a742p1bb35ajsn4ca3a0703b94",
                "x-rapidapi-host": "pokemon-api3.p.rapidapi.com"
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();

            setImageURL(data.sprites.front_default);
            setType(data.types[0].type.name);
            setStats(
                data.stats.map(stat => ({
                name: stat.stat.name,
                value: stat.base_stat
                }))
            );
        } catch (error) {
            console.error("Error fetching Pokémon:", error);
        }

        setIsLoading(false);
    }

    getData();
    }, []);

    if (isLoading) {
        return <h2>Loading Pokémon Data...</h2>;
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Pokémon Profile</h1>
            <h2>Type: {type}</h2>
            <img src={imageURL} alt="pokemon" width="200px" />

            <h3>Stats:</h3>
            <ul>
            {stats.map((stat, index) => (
                <li key={index}>
                {stat.name}: {stat.value}
                </li>
            ))}
            </ul>
        </div>
    );
}

export default PokemonPage