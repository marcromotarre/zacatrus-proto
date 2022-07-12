import { Button, Link, TextField } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

const GameSearch = () => {
  const [name, setName] = useState('')
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    // check if game exist

    // if exist create player
    // add player to game
    // redirect to game


    if (name === '1') {
      router.push('game/1')
    } else if (name === "2") {
      router.push('game/2')
    }
  }

  return (
    <Box>
      <TextField
        id="standard-basic"
        label="Write Game ID"
        variant="standard"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name !== '' && (
        <Link onClick={handleClick} href="/game">
          GO TO GAME
        </Link>
      )}
    </Box>
  )
}

export default GameSearch
