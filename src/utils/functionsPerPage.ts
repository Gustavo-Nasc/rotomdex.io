// const [offset, setOffset] = useState(20)
// const pokemonNames = useMemo<string[]>(() => [], [])
// async function updatePokemonList() {
//   // Deletando todos os itens do vetor de nomes para adicionar novos nomes
//   while (pokemonNames.length) {
//     pokemonNames.pop()
//   }

//   const response = await pokedex.getPokemonsList({ offset, limit: 20 })

//   response.results.forEach((result) => {
//     pokemonNames.push(result.name)
//   })

//   await axios
//     .all(
//       pokemonNames.map((pokemonName) =>
//         pokedex.getPokemonByName(pokemonName),
//       ),
//     )
//     .then((pokemons) => pokemons.map((pokemon) => pokemonList.push(pokemon)))
// }

// useEffect(() => {
//   ;(async () => {
//     const { results } = await pokedex.getPokemonsList()

//     results.forEach((result) => pokemonNames.push(result.name))

//     await axios
//       .all(
//         pokemonNames.map((pokemonName) =>
//           pokedex.getPokemonByName(pokemonName),
//         ),
//       )
//       .then((pokemons) =>
//         pokemons.map((pokemon) => pokemonList.push(pokemon)),
//       )
//     setIsLoading(false)
//   })()
// }, [pokedex, pokemonList, pokemonNames])
