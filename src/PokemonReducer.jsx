import {POKEMON_API_BEGIN, POKEMON_API_ERROR, POKEMON_API_SUCCESS} from './globals/Actions.jsx'

const PokemonReducer = (state, action) => {
    switch (action.type) {
        case POKEMON_API_BEGIN:
            return {...state, pokemon_loading: true}
        case POKEMON_API_SUCCESS:
            return {...state, pokemon_loading: false, pokemon_success: true, pokemons: action.payload}
        case POKEMON_API_ERROR:
            return {...state, pokemon_loading: false, pokemon_error: true, pokemons: []}
    }
}

export default PokemonReducer