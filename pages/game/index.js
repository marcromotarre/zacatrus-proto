import { Button, Link, TextField } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

const GameSearch = () => {
  const [id, setId] = useState('')
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(`game/${id}`)
  }

  return (
    <Box>
      <TextField
        id="standard-basic"
        label="Write Game ID"
        variant="standard"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      {id !== '' && <Button onClick={handleClick}>GO TO GAME</Button>}
    </Box>
  )
}

export default GameSearch
