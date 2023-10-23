import { api } from '@/lib/axios'
import { Pokemon, NamedAPIResourceList } from 'pokedex-promise-v2'

export async function fetchPokemonList(page: number) {
  const offset = 15 * (page - 1)

  const {
    data: { results },
  } = await api.get<NamedAPIResourceList>(`?offset=${offset}&limit=15`)

  const pokemonPromises = results.map(
    async (result) => (await api.get<Pokemon>(result.name)).data,
  )

  const pokemonList = Promise.all(pokemonPromises)

  return pokemonList
}
