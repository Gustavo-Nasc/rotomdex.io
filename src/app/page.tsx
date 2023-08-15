'use client'

import { useEffect, useMemo, useState } from 'react'
import { Loading } from '@/components/Loading'
import { PokemonCard } from '@/components/PokemonCard'

import Pokedex, { Pokemon } from 'pokedex-promise-v2'

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true)
  // const [loadingMessage, setLoadingMessage] = useState('Carregando API')

  // const pokemonNames: string[] = useMemo(() => [], [])
  // const pokemons: Pokedex.Pokemon[] = useMemo(() => [], [])

  // useEffect(() => {
  //   ;(async function getAllPokemons() {
  //     const pokedex = new Pokedex()

  //     // Primeiro, obtemos os nomes de todos os Pokemons
  //     await pokedex
  //       .getPokemonsList({ offset: 0, limit: 1281 })
  //       .then((response) =>
  //         response.results.forEach((pokemonResponse) =>
  //           pokemonNames.push(pokemonResponse.name),
  //         ),
  //       )
  //       .finally(() => setLoadingMessage('Carregando Pokemons'))

  //     // Logo após, realizamos uma requisição na API para cada pokemon
  //     await pokedex
  //       .getPokemonByName(pokemonNames)
  //       .then((response) =>
  //         response.forEach((pokemon) => pokemons.push(pokemon)),
  //       )
  //       .finally(() => setIsLoading(false))
  //   })()
  // }, [pokemonNames, pokemons])
  const [pokemonList, setPokemonsList] = useState<Pokemon[]>([])
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(20)
  const pokemonNames: string[] = []

  const pokedex = new Pokedex({ timeout: 10 * 5000, cacheLimit: 100 * 5000 })

  async function getPokemonNamesList(offset: number, limit: number) {
    const response = await pokedex.getPokemonsList({ offset, limit })

    response.results.forEach((result) => {
      pokemonNames.push(result.name)
    })
  }

  getPokemonNamesList(offset, limit)

  function updateOffsetLimit() {
    setOffset(offset + limit)
    setLimit(limit + 20)

    getPokemonNamesList(offset, limit)
  }

  return (
    <main>
      <div className="grid grid-cols-4 gap-6"></div>
      <button onClick={updateOffsetLimit}>Carregar mais</button>
    </main>
  )
}
