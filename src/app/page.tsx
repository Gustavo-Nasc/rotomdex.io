'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { Loading } from '@/components/Loading'
import { PokemonCard } from '@/components/PokemonCard'

import Pokedex, { Pokemon } from 'pokedex-promise-v2'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingMessage, setLoadingMessage] = useState('Carregando API')
  const [offset, setOffset] = useState(0)
  const pokemonList = useMemo<Pokemon[]>(() => [], [])
  const pokemonNames = useMemo<string[]>(() => [], [])

  const pokedex = useMemo(
    () => new Pokedex({ timeout: 10 * 5000, cacheLimit: 100 * 5000 }),
    [],
  )

  const updatePokemonList = useCallback(
    async (offset: number) => {
      const response = await pokedex.getPokemonsList({ offset, limit: 20 })

      response.results.forEach((result) => {
        pokemonNames.push(result.name)
      })

      console.log(pokemonNames)
    },
    [pokedex, pokemonNames],
  )

  function updateOffset() {
    setOffset(offset + 20)

    updatePokemonList(offset)
  }

  useEffect(() => {
    updatePokemonList(0)
    setIsLoading(false)
  }, [updatePokemonList])

  return (
    <main>
      {isLoading && <Loading loadingMessage={loadingMessage} />}
      <div className="grid grid-cols-4 gap-6">
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            abilities={pokemon.abilities}
            base_experience={pokemon.base_experience}
            forms={pokemon.forms}
            game_indices={pokemon.game_indices}
            height={pokemon.height}
            held_items={pokemon.held_items}
            id={pokemon.id}
            is_default={pokemon.is_default}
            location_area_encounters={pokemon.location_area_encounters}
            moves={pokemon.moves}
            name={pokemon.name}
            order={pokemon.order}
            past_types={pokemon.past_types}
            species={pokemon.species}
            sprites={pokemon.sprites}
            stats={pokemon.stats}
            types={pokemon.types}
            weight={pokemon.weight}
          />
        ))}
      </div>
      <button onClick={updateOffset}>Carregar Mais</button>
    </main>
  )
}
