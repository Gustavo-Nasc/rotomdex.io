'use client'

import { useEffect, useMemo, useState } from 'react'
import { Loading } from '@/components/Loading'

import Pokedex, { Pokemon } from 'pokedex-promise-v2'
import { PaginatedPokemons } from '@/components/PaginatedPokemons'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const pokemonList = useMemo<Pokemon[]>(() => [], [])
  const pokemonNames = useMemo<string[]>(() => [], [])

  useEffect(() => {
    ;(async function getAllPokemons() {
      const pokedex = new Pokedex()

      // Primeiro, obtemos os nomes de todos os Pokemons
      await pokedex
        .getPokemonsList({ offset: 0, limit: 1281 })
        .then((response) =>
          response.results.forEach((pokemonResponse) =>
            pokemonNames.push(pokemonResponse.name),
          ),
        )

      // Logo após, realizamos uma requisição na API para cada pokemon
      await pokedex
        .getPokemonByName(pokemonNames)
        .then((response) =>
          response.forEach((pokemon) => pokemonList.push(pokemon)),
        )
        .finally(() => setIsLoading(false))
    })()
  }, [pokemonNames, pokemonList])

  return (
    <main className="bg-[#060b28]">
      {isLoading && <Loading />}
      <div className="p-6 grid gap-x-6 gap-y-40 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!isLoading && (
          <PaginatedPokemons items={pokemonList} itemsPerPage={20} />
        )}
      </div>
    </main>
  )
}
