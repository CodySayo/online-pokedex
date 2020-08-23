import React from 'react';
import PokemonCard from './PokemonCard'

const PokemonCardList = ({ pokemonArray, sprites }) => {

    return (
        <div>
            {
                pokemonArray.map((pokemon, i) => {
                    return < PokemonCard key={i} name={pokemon.name} sprite={sprites[i]}/>
                })
            }
        </div>
    );

}

export default PokemonCardList;