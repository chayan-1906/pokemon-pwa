import {createContext, useContext, useReducer} from 'react'
import PokemonReducer from '../PokemonReducer.jsx'
import {POKEMON_API_BEGIN, POKEMON_API_ERROR, POKEMON_API_SUCCESS} from "../globals/Actions.jsx";
import axios from "axios";

const initialState = {
    pokemon_loading: false,
    pokemon_success: false,
    pokemon_error: false,
    pokemons: [],
}

const PokemonContext = createContext(null)

export const PokemonProvider = ({children}) => {
    const [state, dispatch] = useReducer(PokemonReducer, initialState)

    const getAllPokemonsApi = async () => {
        console.log('getAllPokemonsApi called')
        try {
            dispatch({type: POKEMON_API_BEGIN})
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=500', {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            console.log(`getAllPokemonsApi response status: ${response.status}`)
            console.log(`getAllPokemonsApi response body: ${JSON.stringify(response.data)}`)
            if (response.status === 200) {
                const responseData = response.data
                dispatch({type: POKEMON_API_SUCCESS, payload: responseData.results})
            }
        } catch (error) {
            dispatch({type: POKEMON_API_ERROR, payload: error.response})
            console.log(`getAllPokemonsApi error: ${JSON.stringify(error.response)}`)
        }
    }

    return (
        <PokemonContext.Provider value={{...state, getAllPokemonsApi}}>
            {children}
        </PokemonContext.Provider>
    )
}

export const usePokemonContext = () => useContext(PokemonContext)