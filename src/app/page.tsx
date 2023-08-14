'use client'

import { useEffect, useMemo, useState } from 'react';
import { Loading } from './components/Loading';
import { PokemonCard } from './components/PokemonCard';

import Pokedex from 'pokedex-promise-v2'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingMessage, setLoadingMessage] = useState('Carregando API')

  const pokemonNames: string[] = useMemo(() => [], [])
  const pokemons: Pokedex.Pokemon[] = useMemo(() => [], [])

  useEffect(() => {
    ;(async function getAllPokemons() {
      const pokedex = new Pokedex()
      
      // Primeiro, obtemos os nomes de todos os Pokemons
      await pokedex.getPokemonsList({offset: 0, limit: 1281})
        .then((response) =>
          response.results.forEach((pokemonResponse) =>
            pokemonNames.push(pokemonResponse.name)
          )
        )
        .finally(() => setLoadingMessage('Carregando Pokemons'))
      

      // Logo após, realizamos uma requisição na API para cada pokemon
      await pokedex.getPokemonByName(pokemonNames)
        .then((response) =>
          response.forEach((pokemon) =>
            pokemons.push(pokemon)
          )
        )
        .finally(() =>
          setIsLoading(false)
        )
    })()
  }, [pokemonNames, pokemons])

  return (
    <main>
      {isLoading && <Loading loadingMessage={loadingMessage} />}
      <div className="grid grid-cols-4">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            base_experience={pokemon.base_experience}
            height={pokemon.height}
            is_default={pokemon.is_default}
            order={pokemon.order}
            weight={pokemon.weight}
            abilities={pokemon.abilities}
            forms={pokemon.forms}
            game_indices={pokemon.game_indices}
            held_items={pokemon.held_items}
            location_area_encounters={pokemon.location_area_encounters}
            moves={pokemon.moves}
            sprites={pokemon.sprites}
            species={pokemon.species}
            stats={pokemon.stats}
            types={pokemon.types}
            past_types={pokemon.past_types}
          />
        ))}
      </div>
    </main>
  )
}
