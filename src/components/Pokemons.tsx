import { Pokemon } from 'pokedex-promise-v2'
import { PokemonCard } from './PokemonCard'

type PokemonsProps = {
  currentPokemons: Pokemon[]
}
export function Pokemons({ currentPokemons }: PokemonsProps) {
  return (
    <>
      {currentPokemons &&
        currentPokemons.map((pokemon) => (
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
    </>
  )
}
