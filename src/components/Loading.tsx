import { Spinner } from '@/assets/Spinner'

export function Loading() {
  return (
    <div className="fixed text-white w-screen h-screen bg-red-600 flex flex-col gap-4 items-center justify-center">
      <Spinner color="#fff" className="w-12 lg:w-16 xl:w-24" />
      <span className="font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
        Carregando Pokemons
      </span>
      <span className="text-xs lg:text-sm xl:text-md 2xl:text-lg">
        É a primeira vez acessando? Pode levar em média 5 minutos
      </span>
    </div>
  )
}
