import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
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

  return (
    <Box>
      <TextField
        id="standard-basic"
        label="Write your username"
        variant="standard"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name !== '' && <Button onClick={handleClick}>CONTINUA</Button>}
    </Box>
  )
}
export default Home
