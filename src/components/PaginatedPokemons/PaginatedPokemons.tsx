import { Pokemon } from 'pokedex-promise-v2'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import * as Icon from '@phosphor-icons/react'
import './PaginatedPokemons.css'

import { Pokemons } from '../Pokemons'

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
  const currentPokemons = items.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(items.length / itemsPerPage)

  return (
    <>
      <div className="paginated-pokemons">
        <Pokemons currentPokemons={currentPokemons} />
      </div>
      <ReactPaginate
        className="pagination-pokemons"
        breakLabel="..."
        nextLabel={<Icon.CaretRight weight="bold" size={25} />}
        previousLabel={<Icon.CaretLeft weight="bold" size={25} />}
        onPageChange={(event) => {
          const newOffset = (event.selected * itemsPerPage) % items.length
          setItemOffset(newOffset)
        }}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
      />
    </>
  )
}
