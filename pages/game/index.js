import { Button, Link, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const GameSearch = () => {
  const [id, setId] = useState('')
  const [player, setPlayer] = useState('')
  const router = useRouter()

  const getPlayer = async (id) => {
    const { data } = await axios.get(`${router.basePath}/api/player/${id}`)
    return data
  }

  const loadData = async (playerId) => {
    const playerData = await getPlayer(playerId)
    if (!playerData.error) {
      setPlayer(playerData)
    }
  }

  useEffect(() => {
    const playerId = localStorage.getItem('playerId')
    loadData(playerId)
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    router.push(`game/${id}`)
  }

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vH',
      }}
    >
      <Box
        sx={{
          height: '50px',
          width: '100%',
          top: '0',
          paddingRight: '40px',
          right: '0',
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          backgroundColor: '#FCFCFC',
        }}
      >
        <Typography variant="span">Hi, {player?.name}</Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: 'calc(100% - 50px)',
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
            label="Write Game ID"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '230px', margin: '0px' }}
            onChange={(e) => setId(e.target.value)}
            value={id}
          />

          <Button
            disabled={id === ''}
            variant="contained"
            sx={{ width: '230px', backgroundColor: '#196DF3', color: 'white' }}
            onClick={handleClick}
          >
            Go to Game
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default GameSearch
