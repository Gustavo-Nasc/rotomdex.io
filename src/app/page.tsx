'use client'

import { useEffect, useMemo, useState } from 'react'
import { Loading } from '@/components/Loading'
import { PokemonCard } from '@/components/PokemonCard'

import Pokedex, { Pokemon } from 'pokedex-promise-v2'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const pokemonList = useMemo<Pokemon[]>(() => [], [])

  useEffect(() => {
    ;(async () => {
      const pokedex = new Pokedex({})
      const { results } = await pokedex.getPokemonsList({
        offset: 0,
        limit: 1281,
      })

      results.forEach(async (result) => {
        const pokemon = await pokedex.getPokemonByName(result.name)

        pokemonList.push(pokemon)
      })
    })()

    setIsLoading(false)
  }, [pokemonList])

  return (
    <main>
      {isLoading && <Loading />}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
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
    </main>
  )
}
