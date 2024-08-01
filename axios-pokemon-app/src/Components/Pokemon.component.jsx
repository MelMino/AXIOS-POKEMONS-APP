// Pokemon.component.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [responseData, setResponseData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPokemon = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
            setResponseData(response.data.results.map(pokemon => pokemon.name));
        } catch (error) {
            setError('No se pudo obtener los datos de los Pokémon.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={fetchPokemon} disabled={loading}>
                {loading ? 'Cargando...' : 'Obtener Pokémon'}
            </button>
            {error && <p>{error}</p>}
            <ul>
                {responseData.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Pokemon;
