import {Card, CardMedia, CircularProgress, Grid, Stack, Typography, useMediaQuery} from '@mui/material'
import {useEffect} from 'react'
import {usePokemonContext} from './contexts/PokemonContext.jsx'
import {capitalize} from "./globals/GlobalFunctions.jsx";

function App() {
    let {getAllPokemonsApi, pokemon_loading, pokemons} = usePokemonContext()
    const betweenXSSM = useMediaQuery((theme) => theme.breakpoints.between('xs', 'sm'))

    useEffect(() => {
        const callApi = () => {
            getAllPokemonsApi()
        }

        callApi()

        return () => {

        }
    }, [])

    if (pokemon_loading && pokemons.length === 0) {
        return (
            <Stack height='100vh' alignItems='center' justifyContent='center'>
                <CircularProgress/>
                <Typography variant='subtitle1' mt={1}>Loading...</Typography>
            </Stack>
        )
    }
  
  return (
      <Grid container mt={1} rowSpacing={2} columnSpacing={3}>
          {
              pokemons.map((pokemon, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                      <Card sx={{padding: '20px', borderRadius: '16px'}}>
                          <CardMedia
                              component='img'
                              alt={pokemon.name}
                              image={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
                              sx={{
                                  objectFit: 'contain',
                                  height: {
                                      xs: '200px',
                                      lg: '300px',
                                  },
                              }}
                          />
                          <Typography fontWeight='bold' textAlign='center' mt={2}
                                      sx={{
                                          fontSize: {
                                              xs: 'h4.fontSize',
                                              lg: 'h4.fontSize',
                                          }
                                      }}>{capitalize(pokemon.name)}
                          </Typography>
                      </Card>
                  </Grid>
              ))
          }

      </Grid>
  )
}

export default App