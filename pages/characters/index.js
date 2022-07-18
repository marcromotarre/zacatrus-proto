import { Box, Button, Card, Stack } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { characters } from '../../src/constants/characters/characters.js'

const GameMaster = () => {
  const router = useRouter()

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: '100%', height: '50px' }} />
      <Box
        sx={{
          paddingLeft: 2,
          paddingRight: 2,
          display: 'grid',
          gridTemplateColumns: 'auto auto',
          width: '100%',
          alignSelf: 'center',
          rowGap: 2,
          columnGap: 2,
          justifyItems: 'center',
        }}
      >
        {characters.map((character, index) => (
          <Card sx={{ width: '100%' }}>
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
      </Box>
    </Box>
  )
}

export default GameMaster
