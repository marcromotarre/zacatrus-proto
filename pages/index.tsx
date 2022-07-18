import {
  Box,
  Button,
  createTheme,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material'
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Home = () => {
  const [name, setName] = useState('')
  const router = useRouter()

  const handleClick = async (e) => {
    e.preventDefault()
    const { data } = await axios.post(`${router.basePath}/api/player`, {
      name,
      isAdmin: false,
    })
    localStorage.setItem('playerId', data.id)
    router.push('game')
  }

  const actions = [
    {
      name: 'PERSONAJES',
      onClick: () => {
        router.push('characters')
      },
    },
    { name: 'CREAR PARTIDA', onClick: () => {} },
  ]

  return (
    <>
      {/* use head and add meta tag in head component  */}
      <Head>
        <title>Home App</title>
      </Head>
      {/* use layout and add other ui component  */}
      <Box
        sx={{
          width: '100vw',
          height: '100vH',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '100%',
            rowGap: '10px',
          }}
        >
          {actions.map((action) => (
            <Box
              sx={{
                padding: 2,
                borderRadius: 2,
                fontFamily: 'Comic Book',
                backgroundColor: '#1976d2',
                color: 'white',
              }}
              onClick={action.onClick}
            >
              {action.name}
            </Box>
          ))}
          <Typography sx={{ fontFamily: 'Comication' }}>
            The Last Hero
          </Typography>
          <TextField
            label="Write your username"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '230px', margin: '0px' }}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <Button
            disabled={name === ''}
            variant="contained"
            sx={{
              width: '230px',
              backgroundColor: '#196DF3',
              color: 'white',
            }}
            onClick={handleClick}
          >
            Go
          </Button>
        </Box>
      </Box>
    </>
  )
}
export default Home
