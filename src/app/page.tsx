'use client'

import { Loading } from '@/components/Loading'
import { PokemonCard } from '@/components/PokemonCard/PokemonCard'
import { fetchPokemonList } from '@/hooks/fetchPokemonList'
import { Pokemon } from 'pokedex-promise-v2'
import { useEffect, useState } from 'react'

export default function Home() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      setPokemonList(await fetchPokemonList(page))
      setIsLoading(false)
    })()
  }, [page])

  return (
    <main className="bg-[#060b28]">
      {isLoading && <Loading />}
      <div>
        {!isLoading &&
          pokemonList.map((pokemon) => (
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
