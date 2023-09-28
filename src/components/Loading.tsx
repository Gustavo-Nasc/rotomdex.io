import { Spinner } from '@/assets/Spinner'
import { useState } from 'react'

export function Loading() {
  const [isAltVisible, setIsAltVisible] = useState(false)

  setTimeout(() => {
    setIsAltVisible(true)
  }, 20000)

  return (
    <div className="p-4 text-white w-screen flex flex-col text-center gap-4 items-center justify-center">
      <Spinner color="#fff" className="w-12 lg:w-16 xl:w-24" />
      <span className="font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
        Carregando Pokemons
      </span>
      {isAltVisible && (
        <span className="text-xs lg:text-sm xl:text-md 2xl:text-lg">
          É a primeira vez acessando? Pode levar em média 2-3 minutos
        </span>
      )}
    </div>
  )
}
