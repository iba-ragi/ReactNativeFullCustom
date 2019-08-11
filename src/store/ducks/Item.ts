type Pokemon = {
  name: string
  type: string
}
type State = {
  pokemons: Pokemon[]
}
const initial: State = {
  pokemons: []
}

export default (state: State = initial, action: Actions): State => {
  switch (action.type) {
    case 'SET_POKEMONS':
      return {
        ...state,
        pokemons: action.payload
      }
    default:
      return state
  }
}

type Actions = ReturnType<typeof createSetPokemons>

export const createSetPokemons = (payload: Pokemon[]) => ({
  type: 'SET_POKEMONS' as const,
  payload
})
