'use client'

import { useEffect, useMemo, useState } from 'react'
import { Loading } from '@/components/Loading'

import Pokedex, { Pokemon } from 'pokedex-promise-v2'
import { PaginatedPokemons } from '@/components/PaginatedPokemons/PaginatedPokemons'

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
          response.forEach(
            (pokemon) =>
              pokemon.sprites.other.home.front_default &&
              pokemonList.push(pokemon),
          ),
        )
        .finally(() => setIsLoading(false))
    })()
  }, [pokemonNames, pokemonList])

  return (
    <main className="bg-[#060b28]">
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="p-6">
          <PaginatedPokemons items={pokemonList} itemsPerPage={15} />
        </div>
      )}
    </main>
  )
}
