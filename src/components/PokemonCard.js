import React from 'react';

const PokemonCard = ({name, sprite}) => {
    return (
        <div className='tc bg-light-gray dib br3 pa2 ma2 grow bw2 shadow-5 w-10'>
            <img alt='pokemon' src={sprite}/>
            <h2>{CapitalizeFirstLetter(name)}</h2>
        </div>
    );
}

const CapitalizeFirstLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

export default PokemonCard;