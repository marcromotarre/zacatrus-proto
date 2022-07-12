import { Box, Button } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'

const GameMaster = () => {
  const router = useRouter()

  const handleClick = async () => {
    const { data } = await axios.post(`${router.basePath}/api/game`)
    if (data.created) {
      router.push(`game/${data.id}`)
    }
  }

  return (
    <Box>
      <Button onClick={() => handleClick()}>CREATE NEW GAME</Button>
    </Box>
  )
}

export default GameMaster
