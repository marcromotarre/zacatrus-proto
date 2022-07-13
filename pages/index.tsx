import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

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

  return (
    <>
      {/* use head and add meta tag in head component  */}
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Iceland&display=swap"
          rel="stylesheet"
        />
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
          <h1>The Last Hero</h1>
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
            sx={{ width: '230px', backgroundColor: '#196DF3', color: 'white' }}
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
