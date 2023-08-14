import { Pokemon } from "pokedex-promise-v2";

export function PokemonCard(props: Pokemon) {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}