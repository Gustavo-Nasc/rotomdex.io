import { Pokemon } from 'pokedex-promise-v2'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Pokemons } from './Pokemons'

type PaginatedPokemonsProps = {
  itemsPerPage: number
  items: Pokemon[]
}

export function PaginatedPokemons({
  itemsPerPage,
  items,
}: PaginatedPokemonsProps) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage
  console.log(`Loading items from ${itemOffset} to ${endOffset}`)
  const currentPokemons = items.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(items.length / itemsPerPage)

  return (
    <>
      <Pokemons currentPokemons={currentPokemons} />
      <ReactPaginate
        className="text-white"
        breakLabel="..."
        nextLabel="next >"
        previousLabel="< previous"
        onPageChange={(event) => {
          const newOffset = (event.selected * itemsPerPage) % items.length
          setItemOffset(newOffset)
        }}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
      />
    </>
  )
}
