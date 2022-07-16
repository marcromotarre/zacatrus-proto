import { Box, Button, Card, Stack } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { characters } from '../../src/constants/characters'

const GameMaster = () => {
  const router = useRouter()

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ width: '100%', height: '50px' }} />
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        {characters.map((character, index) => (
          <Card sx={{ width: '40%' }}>
            <Image
              onClick={() => {
                router.push(`characters/${index}`)
              }}
              width="200"
              height="200"
              src={`/images/${character.image}`}
            />
          </Card>
        ))}
      </Stack>
    </Box>
  )
}

export default GameMaster
